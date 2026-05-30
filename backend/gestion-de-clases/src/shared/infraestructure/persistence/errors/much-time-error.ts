import { DbError } from './db-error';

export class MuchTimeError extends DbError {
    constructor() {
        super('El tiempo para procesar la consulta fue demasiado largo');
    }
}
