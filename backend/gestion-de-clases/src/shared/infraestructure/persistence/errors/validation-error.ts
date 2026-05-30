import { DbError } from './db-error';

export class ValidationError extends DbError {
    constructor() {
        super('No se puede ingresar el registro, existen campos invalidos');
    }
}
