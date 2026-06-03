import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { RepeatEntityException } from '../../../persistence/errors/repeat-entity-exception';

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
