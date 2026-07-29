import type { ErrorResponse } from "../types/error-response";
import { ApiError, type SideError } from "./api-error";

export class ClientError extends ApiError {
    constructor(status: number, data: ErrorResponse) {
        super(status, data);
    }

    sideError(): SideError {
        return 'Client'
    }
}
