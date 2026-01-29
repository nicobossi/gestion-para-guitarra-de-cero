import type { ErrorRequestHandler, Response } from "express";
import type { HttpResponse } from "../../http/http-response/http-response";
import { ValidationError } from "yup";
import { DbUknowError } from "../../persistence/errors/uknow-errors/errors";
import ErrorReason from "../../persistence/errors/uknow-errors/errors-reason";


export class ErrorHandler {

    private readonly httpResponse : HttpResponse;
    private dbCodeStatusMap : Map<ErrorReason, number> = new Map<ErrorReason, number>();

    constructor(httpResponse : HttpResponse) {
        this.httpResponse = httpResponse;
        this.setCodeStatusErrors();
    }

    handle() : ErrorRequestHandler {
        return (error, req , res, next) => {
            if(error instanceof ValidationError) return this.httpResponse.BAD_REQUEST(res, {message: error.message});
            else if(error instanceof DbUknowError) this.errorDbResponse(res, error);
        }
    }

    private errorDbResponse(res : Response, error : DbUknowError) {
        return this.httpResponse.SERVER_ERROR(res, this.getBody(error), this.getCode(error.getReason));
    }

    private setCodeStatusErrors() {
        this.dbCodeStatusMap.set(ErrorReason.Credentials, 500);
        this.dbCodeStatusMap.set(ErrorReason.Disconnect, 503);
        this.dbCodeStatusMap.set(ErrorReason.MuchTime, 504);
        this.dbCodeStatusMap.set(ErrorReason.Uknow, 500);
        this.dbCodeStatusMap.set(ErrorReason.Unauthorized, 501);
        this.dbCodeStatusMap.set(ErrorReason.FieldNotFound, 500);
        this.dbCodeStatusMap.set(ErrorReason.NotRegister, 500);
    }

    private getCode(reason : ErrorReason) : number | undefined {
        return this.dbCodeStatusMap.get(reason);
    }

    private getBody(error : DbUknowError) {
        return {
            message: error.message,
            reason: ErrorReason[error.getReason]
        }
    }
}
