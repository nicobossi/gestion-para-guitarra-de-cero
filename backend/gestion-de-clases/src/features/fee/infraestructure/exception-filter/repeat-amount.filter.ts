import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { RepeatAmountException } from '../../domain/repeat-amount-exception';
import { Request, Response } from 'express';

@Catch(RepeatAmountException)
export class RepeatAmountFilter implements ExceptionFilter {
    catch(_: RepeatAmountException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        response.status(409).json({
            message:
                'Una cuota no puede tener el mismo monto que otra cuota existente.',
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
}
