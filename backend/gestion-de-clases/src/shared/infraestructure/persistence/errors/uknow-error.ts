import { DbError } from './db-error';

export class UnknownError extends DbError {
    constructor() {
        super('Hubo un error desconocido');
    }
}
