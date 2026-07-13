import {
    PostgreSqlContainer,
    StartedPostgreSqlContainer,
} from '@testcontainers/postgresql';
import { execSync } from 'child_process';

export const createSqlContainer = () => new PostgreSqlContainer('postgres:17');

export const createDatabaseToContainer = (
    container: StartedPostgreSqlContainer,
) => {
    process.env.DATABASE_URL = container.getConnectionUri();
    execSync('pnpm prisma migrate deploy', {
        env: {
            ...process.env,
            DATABASE_URL: process.env.DATABASE_URL,
        },
    });
};
