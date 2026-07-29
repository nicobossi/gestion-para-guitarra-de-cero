import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { FilterExceptionDbData } from './response-data';
import { DbError } from '../../persistence/errors/db-error';
import { randomUUID } from 'crypto';

export abstract class DbExceptionFilter<
    T extends DbError,
> implements ExceptionFilter {
    catch(_: T, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        const { status, message } = this.responseData();
        response.status(status).json({
            title: 'SERVER ERROR',
            cause: 'INTERNAL_SERVER_ERROR',
            message,
            id: randomUUID(),
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }

    protected abstract responseData(): FilterExceptionDbData;
}
