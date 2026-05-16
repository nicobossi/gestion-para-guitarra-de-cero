import type { ErrorRequestHandler } from "express";
import type { ErrorMiddleware } from "../error.middleware";
import { HttpResponse } from "../../../http/http-response/http-response";
import { ModelException } from "@/main/shared/domain/exception/model-exception";
import modelCodeError from "./mapcode";


export class ModelExceptionMiddleware implements ErrorMiddleware {
    
    
    handle() : ErrorRequestHandler {
        return (error, _, res, next) => {
            if(error instanceof ModelException) return HttpResponse.ERROR(res, {message: error.message}, this.getCode(error));
            else next(error);
        }
    }

    private getCode(error : ModelException) : number | undefined {
        return modelCodeError.get(error.getCause);
    }
}