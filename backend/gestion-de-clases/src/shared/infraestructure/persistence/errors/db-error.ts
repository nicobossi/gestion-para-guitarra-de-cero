import { HttpException } from '@nestjs/common';

export abstract class DbError extends HttpException {
    constructor(message: string, status: number) {
        super(message, status);
    }
}
