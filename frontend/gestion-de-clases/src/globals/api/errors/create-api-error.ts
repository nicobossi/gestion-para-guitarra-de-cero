import type { ErrorResponse } from "../types/error-response";
import type { ApiError } from "./api-error";
import { ClientError } from "./client-error";
import { ServerError } from "./server-error";
import { UknowError } from "./uknow-error";

function createApiError(status: number, data: ErrorResponse): ApiError {
    if      (status >= 500) return new ServerError(status, data);
    else if (status >= 400) return new ClientError(status, data);
    else                    return new UknowError(status, data);
}

export default createApiError;