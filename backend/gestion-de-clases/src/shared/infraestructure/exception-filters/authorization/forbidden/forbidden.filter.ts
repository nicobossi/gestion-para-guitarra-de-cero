import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    ForbiddenException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(ForbiddenException)
export class ForbiddenFilter implements ExceptionFilter {
    catch(exception: ForbiddenException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        response.status(exception.getStatus()).json({
            message: 'Usuario no autorizado',
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
}
