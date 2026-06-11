import { DbError } from './db-error';

export class RepeatFieldException extends DbError {
    constructor() {
        super('Algún campo de la entidad ya se encuentra registrado', 409);
    }
}
