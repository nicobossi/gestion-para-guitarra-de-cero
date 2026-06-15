import { ErrorHandler } from './prisma.handler-error';

export class UnitOfWork {
    private readonly errorHandler: ErrorHandler;
    constructor() {
        this.errorHandler = new ErrorHandler();
    }
    async execute<T>(query: () => Promise<T>): Promise<T> {
        try {
            return await query();
        } catch (error) {
            throw this.errorHandler.handle(error);
        }
    }
}
