import {
    ServiceUnavailableException,
    GatewayTimeoutException,
    Injectable,
    OnModuleDestroy,
    OnModuleInit,
    InternalServerErrorException,
    ForbiddenException,
} from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../../../../generated/prisma/client';
import {
    PrismaClientKnownRequestError,
    PrismaClientValidationError,
} from '@prisma/client/runtime/client';
import { ValidationError } from '../errors/validation-error';
import { DbError } from '../errors/db-error';
import { NotRegisterError } from '../errors/not-register-error';
import { CredentialsError } from '../errors/credentials-error';
import { RepeatEntityException } from '../errors/repeat-entity-exception';

@Injectable()
export class SqlClient
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy
{
    private readonly mapError: Map<string, DbError>;
    constructor() {
        const adapter = new PrismaPg({
            connectionString: `${process.env.DATABASE_URL}`,
        });
        super({ adapter });
        this.mapError = this.getErrors();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
    async onModuleInit() {
        await this.$connect();
    }

    handleError(error: unknown): DbError {
        if (error instanceof PrismaClientKnownRequestError)
            return this.findError(error.code);
        else if (error instanceof PrismaClientValidationError)
            return new ValidationError();
        return new InternalServerErrorException();
    }

    private findError(code: string): DbError {
        const exception = this.mapError.get(code);
        return exception ? exception : new NotRegisterError();
    }

    private getErrors(): Map<string, DbError> {
        const mapError: Map<string, DbError> = new Map<string, DbError>();
        mapError.set('P2002', new RepeatEntityException());
        mapError.set('P1000', new CredentialsError());
        mapError.set('P1001', new ServiceUnavailableException());
        mapError.set('P1002', new GatewayTimeoutException());
        mapError.set('P1008', new GatewayTimeoutException());
        mapError.set('P1010', new ForbiddenException());
        return mapError;
    }
}
