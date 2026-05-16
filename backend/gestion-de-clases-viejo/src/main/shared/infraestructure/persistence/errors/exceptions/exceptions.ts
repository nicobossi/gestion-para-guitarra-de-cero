import { DbError } from "../db-error";

export class DbException extends DbError {
    
    constructor(message : string) {
        super(message);
    }
} 

export class RepeatEntityException extends DbException {

    constructor() {
        super("La entidad ya se encuentra registrada");
    }
}