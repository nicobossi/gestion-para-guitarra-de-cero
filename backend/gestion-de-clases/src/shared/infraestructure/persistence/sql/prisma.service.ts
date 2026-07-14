import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../../../../generated/prisma/client';
import { CredentialsError } from '../errors/credentials-error';

@Injectable()
export class SqlClient
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy
{
    constructor() {
        if (!process.env.DATABASE_URL) {
            throw new CredentialsError();
        }
        const adapter = new PrismaPg({
            connectionString: `${process.env.DATABASE_URL}`,
        });
        super({ adapter });
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
    async onModuleInit() {
        await this.$connect();
    }
}
