import { DbError } from './db-error';

export class RepeatEntityException extends DbError {
    constructor() {
        super('La entidad ya se encuentra registrada');
    }
}
