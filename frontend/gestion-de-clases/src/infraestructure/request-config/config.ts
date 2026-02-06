import { AxiosError } from "axios";
import { ApiError, CauseError } from "../api/api-error";


function handleError(error : unknown) {
    if(error instanceof AxiosError) {
            
        if(!error.response) {
            const apiError = new ApiError(500, error.message, CauseError.Server);
            return Promise.reject(apiError);
        }
    
        const status = error.response.status
    
        if(status >= 400 && status < 500) {
            const apiError = new ApiError(status, error.message, CauseError.Client);
            return Promise.reject(apiError);
        }
    
        if(status >= 500) {
            const apiError = new ApiError(status, error.message, CauseError.Server);
            return Promise.reject(apiError);
        }
    }
    else return Promise.reject(error);
}

export default handleError;