import type { ErrorRequestHandler } from "express";
import type { ErrorMiddleware } from "../error.middleware";
import { HttpResponse } from "../../../http/http-response/http-response";
import { ModelException } from "@/main/shared/domain/exception/model-exception";


export class ModelExceptionMiddleware implements ErrorMiddleware {
    
    
    handle() : ErrorRequestHandler {
        return (error, _, res, next) => {
            if(error instanceof ModelException) return HttpResponse.BAD_REQUEST(res, {message: error.message});
            else next(error);
        }
    }
}