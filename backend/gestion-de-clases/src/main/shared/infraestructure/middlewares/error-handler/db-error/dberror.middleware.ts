import type { ErrorRequestHandler, Response } from "express";
import type { ErrorMiddleware } from "../error.middleware";
import { InfraestructureDbError } from "../../../persistence/errors/uknow-errors/uknow-error";
import ErrorReason from "../../../persistence/errors/uknow-errors/reason";
import { HttpResponse } from "../../../http/http-response/http-response";


export class DbErrorMiddleware implements ErrorMiddleware {

    private mapCodeStatus : Map<ErrorReason, number>;

    constructor(mapCodeStatus : Map<ErrorReason, number>) {
        this.mapCodeStatus = mapCodeStatus;
    }

    handle() : ErrorRequestHandler {
        return (error, req, res, _) => {
            if(error instanceof InfraestructureDbError) return this.errorDbResponse(res, error);
            else return HttpResponse.ERROR(res, {error: "Error desconocido"}, 500);
        }
    }

    private errorDbResponse(res : Response, error : InfraestructureDbError) {
        return HttpResponse.ERROR(res, this.getBody(error), this.getCode(error.getReason));
    }

    private getCode(reason : ErrorReason) : number | undefined {
        return this.mapCodeStatus.get(reason);
    }

    private getBody(error : InfraestructureDbError) {
        return {
            reason: ErrorReason[error.getReason],
            message: error.message
        }
    }
}