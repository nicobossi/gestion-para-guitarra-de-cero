import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../../../../generated/prisma/client';
import { ErrorHandler } from './prisma.handler-error';

@Injectable()
export class SqlClient
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy
{
    private readonly errorHandler: ErrorHandler;
    constructor() {
        const adapter = new PrismaPg({
            connectionString: `${process.env.DATABASE_URL}`,
        });
        super({ adapter });
        this.errorHandler = new ErrorHandler();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
    async onModuleInit() {
        await this.$connect();
    }

    async execute<T>(query: () => T): Promise<T> {
        try {
            return await query();
        } catch (error) {
            throw this.errorHandler.handle(error);
        }
    }
}
