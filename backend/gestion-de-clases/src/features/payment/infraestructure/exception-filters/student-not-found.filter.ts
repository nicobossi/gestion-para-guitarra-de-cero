import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { StudentNotFound } from '../../../../shared/application/exceptions/student-not-found';

@Catch(StudentNotFound)
export class StudentNotFoundFilter implements ExceptionFilter<StudentNotFound> {
    catch(exception: StudentNotFound, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        return response.status(404).json({
            message: exception.message,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
}
