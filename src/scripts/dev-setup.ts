import { MongoClient} from 'mongodb';
import { SysConfig } from '../config';

function makeBook(isbn: string, name: string, authors: string[], edition: number, published: number): any{
	return {
		isbn: isbn,
		name: name,
		authors: authors,
		edition: edition,
		published: published
	};
}

let books = [
	makeBook("978-0-470-67107-8", "A Guide to Old English", ["Bruce Mitchell", "Fred C. Robinson"], 8, 2012)
];

(async function test(){
	const options = {useNewUrlParser: true, useUnifiedTopology: true};
	var mongoclient = new MongoClient(SysConfig.mongoURL, options);
	try{
		await mongoclient.connect();
	}catch{
		console.log("Ugh oh, coulnd't connect to the database, is it running?");
		process.exit(1);
	}
	var db = mongoclient.db(SysConfig.dbName);

	db.createCollection("books", (err: Error) =>{
		if(err){
			console.log("Failed tp create the books collection");
			console.log(err);
		}
	});
	for (let b of books){
		var cur = await db.collection("books").find({isbn: b.isbn});
		let n = await cur.next();
		if(n == null){
			db.collection("books").insertOne(b);
		}else{
			console.log(JSON.stringify(b) + "Already in the database! Yay");
		}
	}

	mongoclient.close();
})();


