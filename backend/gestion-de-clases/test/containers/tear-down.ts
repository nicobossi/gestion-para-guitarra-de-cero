import { Client } from 'pg';

export const clearSqlContainer = async () => {
    const client = await new Client({
        connectionString: process.env.DATABASE_URL,
    }).connect();

    await client.query(`
        TRUNCATE TABLE "student", "fee"
        RESTART IDENTITY CASCADE
    `);

    await client.end();
};
