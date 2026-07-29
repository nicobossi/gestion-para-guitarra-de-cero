import { AxiosError } from "axios";
import { ApiError } from "../errors/api-error";
import type { ErrorResponse } from "../types/error-response";
import createApiError from "../errors/create-api-error";

function handleError(error: AxiosError<ErrorResponse>): Promise<ApiError> | undefined {
    const { status, data } = error.response!
    const apiError = createApiError(status, data);
    return Promise.reject(apiError);
}

export default handleError;