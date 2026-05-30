import { DbError } from './db-error';

export class DenegateError extends DbError {
    constructor() {
        super('El usuario fue denegado');
    }
}
