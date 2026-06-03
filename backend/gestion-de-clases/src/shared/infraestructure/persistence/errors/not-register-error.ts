import { DbError } from './db-error';

export class NotRegisterError extends DbError {
    constructor() {
        super('El error no se encuentra registrado', 500);
    }
}
