import * as fs from 'fs';

function getTypescriptFiles(root: string): string[] {
	let files = new Array<string>();
	let items: string[];	
	try {	
		items = fs.readdirSync(root)
	}catch (e){
		return files;
	}
	for (let item of items) {
		if(item.endsWith(".ts")){
			files.push(root+"/"+item);
		}else{
			const subs = getTypescriptFiles(root+"/"+item);
			for (let sub of subs){
				files.push(sub);
			}
		}
	}

	return files;
}

function sweep(file: string): string[]{
	let ret = new Array<string>();	

	let f = fs.readFileSync(file).toString();

	let col = '';

	let found = false;
	for (let line of f.split(/\r?\n/)){
		if (found){
			line = line.replace("export ", "");
			col += line+"\n";
			if (line == '}'){
				found = false;
				ret.push(col);
				col = '';
			}	
		}else{
			if(line == '//@shared'){
				found = true;
			}
		}
	}
	return ret;
}

function go(){
	if(process.argv.length != 3){
		console.log("Please specify a directory to operate on");
		return;
	}
	const outpath = "./src/client/src/definitions.ts"
	const files = getTypescriptFiles(process.argv[2]);	

	let outputData = '//ATTENTION! This is auto generated code, it gets overwritten when the project is built!\n';
	outputData += '//If you wish to change anything here you will need to find the relevant defintion in the server code!\n';

	for (let f of files){
		let gets = sweep(f);
		if(gets.length > 0){
			for (let get of gets){
				outputData += get + '\n';
			}
		}
	}
	fs.writeFileSync(outpath, outputData);
}
go();
