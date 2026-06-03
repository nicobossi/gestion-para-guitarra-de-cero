import { DbError } from './db-error';

export class CredentialsError extends DbError {
    constructor() {
        super(
            'Hubo un problema de credenciales al conectarse a la base de datos',
            500,
        );
    }
}
