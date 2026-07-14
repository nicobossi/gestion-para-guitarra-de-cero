import { DbError } from './db-error';

export class InvalidInsertError extends DbError {
    constructor() {
        super(
            'No se puede ingresar el registro, existen campos invalidos',
            400,
        );
    }
}
