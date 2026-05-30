import { DbError } from './db-error';

export class DisconnectError extends DbError {
    constructor() {
        super('La base de datos se encuentra desconectada');
    }
}
