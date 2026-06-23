import {
    ForbiddenException,
    GatewayTimeoutException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
} from '@nestjs/common';
import { DbError } from '../errors/db-error';
import {
    PrismaClientKnownRequestError,
    PrismaClientValidationError,
} from '@prisma/client/runtime/client';
import { RepeatFieldException } from '../errors/repeat-field-exception';
import { CredentialsError } from '../errors/credentials-error';
import { NotRegisterError } from '../errors/not-register-error';
import { ValidationError } from '../errors/validation-error';

export class ErrorHandler {
    private readonly mapError: Map<string, DbError>;

    constructor() {
        this.mapError = this.getErrors();
    }

    handle(error: unknown): DbError {
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
        mapError.set('P2002', new RepeatFieldException());
        mapError.set('P1000', new CredentialsError());
        mapError.set('P1001', new ServiceUnavailableException());
        mapError.set('P1002', new GatewayTimeoutException());
        mapError.set('P1008', new GatewayTimeoutException());
        mapError.set('P1010', new ForbiddenException());
        mapError.set('P2025', new NotFoundException());
        return mapError;
    }
}
