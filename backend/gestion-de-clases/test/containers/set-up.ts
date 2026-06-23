import { Client } from 'pg';

export const setUp = async () => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });

    await client.connect();

    await client.query(
        `
        INSERT INTO student VALUES ($1, $2, $3, $4, $5, $6)`,
        [
            1,
            'Nicolás',
            'Fernando',
            'Bossi',
            1234567890,
            '2026-12-05T03:00:00.000Z',
        ],
    );

    await client.query(
        `
        INSERT INTO fee VALUES ($1, $2, $3, $4)`,
        [1, 100, '2026-12-05T03:00:00.000Z', 'MONTHLY'],
    );

    await client.end();
};
