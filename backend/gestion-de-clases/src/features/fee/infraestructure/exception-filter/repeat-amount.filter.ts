import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { RepeatFieldException } from '../../../../shared/infraestructure/persistence/errors/repeat-field-exception';

@Catch(RepeatFieldException)
export class RepeatAmountFilter implements ExceptionFilter {
    catch(_: RepeatFieldException, host: ArgumentsHost) {
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
