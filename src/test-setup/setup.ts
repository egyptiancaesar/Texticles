import { dbClient } from '../database/client';

export default async () => {
    await dbClient.setup();
    process.env.MODE = 'test';
}
