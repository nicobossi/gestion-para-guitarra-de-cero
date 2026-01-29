import type { ErrorRequestHandler, Response } from "express";
import type { ErrorMiddleware } from "../error.middleware";
import { DbUknowError } from "../../../persistence/errors/uknow-errors/uknow-error";
import ErrorReason from "../../../persistence/errors/uknow-errors/reason";
import { HttpResponse } from "../../../http/http-response/http-response";


export class DbErrorMiddleware implements ErrorMiddleware {

    private mapCodeStatus : Map<ErrorReason, number>;

    constructor(mapCodeStatus : Map<ErrorReason, number>) {
        this.mapCodeStatus = mapCodeStatus;
    }

    handle() : ErrorRequestHandler {
        return (error, req, res, _) => {
            if(error instanceof DbUknowError) return this.errorDbResponse(res, error);
            else return HttpResponse.SERVER_ERROR(res, {error: "Error desconocido"}, 500);
        }
    }

    private errorDbResponse(res : Response, error : DbUknowError) {
        return HttpResponse.SERVER_ERROR(res, this.getBody(error), this.getCode(error.getReason));
    }

    private getCode(reason : ErrorReason) : number | undefined {
        return this.mapCodeStatus.get(reason);
    }

    private getBody(error : DbUknowError) {
        return {
            message: error.message,
            reason: ErrorReason[error.getReason]
        }
    }
}