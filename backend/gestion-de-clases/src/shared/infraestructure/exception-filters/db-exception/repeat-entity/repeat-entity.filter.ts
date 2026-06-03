import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { RepeatEntityException } from '../../persistence/errors/repeat-entity-exception';
import { Request, Response } from 'express';

@Catch(RepeatEntityException)
export class RepeatEntityFilter implements ExceptionFilter {
    catch(_: RepeatEntityException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        response.status(400).json({
            message:
                'Existen datos ingresados que ya se encuentran registrados',
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
}
