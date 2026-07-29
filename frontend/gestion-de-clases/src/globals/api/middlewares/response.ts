import type { AxiosError, AxiosInstance } from "axios";
import handleError from "../services/handle-error.service";
import type { ErrorResponse } from "../types/error-response";

function responseMiddleware(api: AxiosInstance) {
    api.interceptors.response.use(
        response => response,
        (error: AxiosError<ErrorResponse>) => error.response ? handleError(error) : error
    )
}

export default responseMiddleware;