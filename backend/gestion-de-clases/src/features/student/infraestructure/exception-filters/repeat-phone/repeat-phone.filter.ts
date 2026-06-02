import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { RepeatPhoneException } from '../../../domain/repeat-phone-exception';
import { Request, Response } from 'express';

@Catch(RepeatPhoneException)
export class RepeatPhoneFilter implements ExceptionFilter {
    catch(_: RepeatPhoneException, host: ArgumentsHost) {
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
