import { MongoClient, Db, Collection } from 'mongodb';
import { SysConfig } from '../config';
import { InternalError, ErrCodes, Severity } from '../error';

export enum Collections {
	Users = 'users',
	Books = 'books',
}

class DatabaseClient {
    private client: MongoClient;
    private db: Db | null = null;

    constructor() {
        const options = { useNewUrlParser: true, useUnifiedTopology: true };
        this.client = new MongoClient(SysConfig.mongoURL, options);
    }

    public async close() {
        if (this.db && this.db.databaseName === 'test') {
            await this.db.dropDatabase();
        }

        await this.client.close();
    }

    public async setup(): Promise<InternalError|null> {
        try {
            await this.client.connect();
            this.db = this.client.db(SysConfig.dbName);
            await this.createCollections();
        } catch (e) {
            return new InternalError(ErrCodes.DBConnectionErr, e.message, Severity.Fatal);
        }

        return null;
    }

    async createCollections() {
        if (this.db) {
            // Users collection
            const users = await this.db.createCollection(Collections.Users);
            users.createIndex({ "email": 1 }, { unique: true });
            users.createIndex({ "id": 1 }, { unique: true });
	    
	    // Books collection
	    const books = await this.db.createCollection(Collections.Books);
	    books.createIndex({ "isbn": 1 }, { unique: true });
	    books.createIndex({ "id": 1 }, { unique: true});   
	    // Create other collections make sure to add to Collections enum
	}
    }

    /**
     * Fetches a collection from the database based in the name
     * that is passed in the name arg
     * @param name - The name of the collection to fetch
     */
    public getCollection(name: Collections): Collection {
        if (this.db) {
            return this.db.collection(name.toString());
        }

        // Process will exit here but TS does not like not
        // having a return statement so we throw an error
        process.exit(1);
        throw new Error('There is no Database Connected');
    }

}

export const dbClient = new DatabaseClient();
