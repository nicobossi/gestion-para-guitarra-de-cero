import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

export abstract class DbFilterException<
    T extends HttpException,
> implements ExceptionFilter {
    catch(_: T, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        const { status, message } = this.getResponseData();
        response.status(status).json({
            message: message,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }

    protected abstract getResponseData(): { status: number; message: string };
}
