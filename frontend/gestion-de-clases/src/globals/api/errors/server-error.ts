import type { ErrorResponse } from "../types/error-response";
import { ApiError, type SideError } from "./api-error";

export class ServerError extends ApiError {
    constructor(status: number, data: ErrorResponse) {
        super(status, data);
    }

    sideError(): SideError {
        return 'Server'
    }
}