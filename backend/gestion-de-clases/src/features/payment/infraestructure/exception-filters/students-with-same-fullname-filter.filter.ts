import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { StudentsWithSameFullname } from '../../../../shared/application/exceptions/students-with-same-fullname';
import { Request, Response } from 'express';

@Catch(StudentsWithSameFullname)
export class StudentsWithSameFullnameFilter implements ExceptionFilter<StudentsWithSameFullname> {
    catch(exception: StudentsWithSameFullname, host: ArgumentsHost) {
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
