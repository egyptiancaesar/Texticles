//ATTENTION! This is auto generated code, it gets overwritten when the project is built!
//If you wish to change anything here you will need to find the relevant defintion in the server code!
interface Book {
	readonly isbn: string;
	readonly name: string;
	readonly authors: string[];
	readonly edition: number;
	readonly published: number;
}

enum Role {
    Admin,
    Standard
}

interface User {
    readonly id: string,
    readonly email: string,
    readonly passwordSalt: string,
    readonly passwordHash: string,
    readonly dateCreated: number,
    readonly failedLoginAttempts: number,
    readonly role: Role;
}

