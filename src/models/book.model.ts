import { dbClient } from '../database/client';
import { InternalError, Severity } from '../error';
import { Collections } from '../database/client';
import { ObjectId } from 'mongodb';


//@shared
export interface Book {
	readonly isbn: string;
	readonly name: string;
	readonly authors: string[];
	readonly edition: number;
	readonly published: number;
}
	
export async function getBookByID(id: string): Promise<Book | InternalError>{	
	try {
		let col = await dbClient.getCollection(Collections.Books);
		let book = await col.findOne({ _id: new ObjectId(id) });

		console.log(book);

		return book as Book;
	} catch (e) {
		return new InternalError(0, "Failed to get book by id", Severity.Error);
	}
}
export async function getBooks(): Promise<Book[] | InternalError> {
	try{
		let col = await dbClient.getCollection(Collections.Books);
		let books = await col.find().toArray();


		return books as Book[];	
	} catch (e) {
		return new InternalError(0, "Failed to get books", Severity.Error);
	}
}
