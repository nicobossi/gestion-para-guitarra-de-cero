import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from 'resources/generated/prisma/client';
import dotenv from "dotenv";
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, "../.env") });
const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
const client = new PrismaClient({ adapter });

export default client;