import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { ModelException } from '../../../domain/exceptions/model-exception';
import { ErrorData } from '../error-data';
import { randomUUID } from 'crypto';

export abstract class ModelFilterException<
    T extends ModelException,
> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        const { title, cause, message, status, errors } = this.responseData();
        response.status(status).json({
            title,
            message,
            cause,
            path: request.url,
            errors,
            id: randomUUID(),
            timestamp: new Date().toISOString(),
        });
    }

    protected abstract responseData(): ErrorData;
}
