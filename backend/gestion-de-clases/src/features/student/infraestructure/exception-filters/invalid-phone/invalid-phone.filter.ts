import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { InvalidPhoneException } from '../../../../../shared/domain/number-phone/invalid-phone-exception';
import { Request, Response } from 'express';

@Catch(InvalidPhoneException)
export class InvalidPhoneFilter implements ExceptionFilter<InvalidPhoneException> {
    catch(exception: InvalidPhoneException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        return response.status(409).json({
            message: exception.message,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
}
