import type { ErrorRequestHandler } from "express";
import type { ErrorMiddleware } from "../error.middleware";
import { ValidationError } from "yup";
import { HttpResponse } from "../../../http/http-response/http-response";



export class BodyErrorMiddleware implements ErrorMiddleware {
    
    handle(): ErrorRequestHandler {
        return (error, _, res, next) => {
            if(error instanceof ValidationError) return HttpResponse.BAD_REQUEST(res, {message: error.message});
            else next(error);
        }
    }
}