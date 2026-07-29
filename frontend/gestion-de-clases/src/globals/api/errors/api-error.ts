import type { Cause } from "../types/cause";
import type { ErrorResponse } from "../types/error-response";
import type { SideError } from "../types/side-error";

export abstract class ApiError {
    private status: number 
    private data: ErrorResponse 
    private cause: Cause;

    constructor(status: number, data: ErrorResponse) {
        this.status = status;
        this.data = data;
        this.cause = data.cause;
    }

    get getStatus() {
        return this.status
    }

    get getMessage() {
        return this.data
    }

    get getCause() {
        return this.cause
    }

    isCause(cause: Cause) {
        return cause === this.cause;
    }

    abstract sideError(): SideError
}

