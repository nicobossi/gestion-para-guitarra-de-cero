import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { FilterExceptionDbData } from './response-data';
import { DbError } from '../../persistence/errors/db-error';

export abstract class DbFilterException<
    T extends DbError,
> implements ExceptionFilter {
    catch(_: T, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        const { status, message } = this.responseData();
        response.status(status).json({
            message: message,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }

    protected abstract responseData(): FilterExceptionDbData;
}
