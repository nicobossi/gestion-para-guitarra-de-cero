import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { FilterExceptionModelData } from './model-filter-error-data';
import { ModelException } from '../../../domain/exceptions/model-exception';

export abstract class ModelFilterException<
    T extends ModelException,
> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        const { message, status } = this.responseData();
        response.status(status).json({
            message: message ? message : exception.message,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }

    protected abstract responseData(): FilterExceptionModelData;
}
