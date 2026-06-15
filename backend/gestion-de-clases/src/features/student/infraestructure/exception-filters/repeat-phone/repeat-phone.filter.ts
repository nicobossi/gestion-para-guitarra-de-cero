import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { RepeatFieldException } from '../../../../../shared/infraestructure/persistence/errors/repeat-field-exception';

@Catch(RepeatFieldException)
export class RepeatPhoneFilter implements ExceptionFilter {
    catch(_: RepeatFieldException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        response.status(409).json({
            message:
                'El número de teléfono ya está registrado para otro estudiante.',
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
}
