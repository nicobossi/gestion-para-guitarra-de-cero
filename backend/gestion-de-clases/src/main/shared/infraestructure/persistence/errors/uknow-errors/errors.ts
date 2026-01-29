import { DbError } from "../db-error";
import type ErrorReason from "./errors-reason";


export class DbUknowError extends DbError {

    private reason : ErrorReason;

    constructor(message : string, reason : ErrorReason) {
        super(message);
        this.reason = reason;
    }

    get getReason() : ErrorReason {
        return this.reason;
    }
} 