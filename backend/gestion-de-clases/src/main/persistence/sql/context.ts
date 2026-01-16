import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../../../../resources/generated/prisma/client';
import 'dotenv/config'


const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const client = new PrismaClient({ adapter });

export default client;