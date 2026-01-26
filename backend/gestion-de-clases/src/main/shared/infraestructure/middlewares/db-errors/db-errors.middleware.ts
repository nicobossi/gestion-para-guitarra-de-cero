import type { ErrorRequestHandler, NextFunction, Response } from "express";
import { CredentialsException, DisconnectException, EntityFieldException, TimeException, UknowDataBaseException, UnauthorizedException } from "@/main/shared/infraestructure/persistence/exceptions/exceptions";
import type { HttpResponse } from "../../http/http-response/http-response";


export class DbErrorMiddelware {

    private readonly httpResponse : HttpResponse;

    constructor(httpResponse : HttpResponse) {
        this.httpResponse = httpResponse;
    }

    handleErrors() : ErrorRequestHandler {
        return (error : unknown, _ , res : Response, next : NextFunction) => {
            if(error instanceof CredentialsException) return  this.httpResponse.SERVER_ERROR(res, {message: error.message});
            if(error instanceof DisconnectException) return this.httpResponse.SERVER_UNAVAILABLE(res, {message: error.message});
            if(error instanceof TimeException) return this.httpResponse.SERVER_TIMEOUT(res, {message: error.message});
            if(error instanceof UknowDataBaseException) return this.httpResponse.SERVER_ERROR(res, {message: error.message});
            if(error instanceof UnauthorizedException) return this.httpResponse.UNAUTHORIZED(res, {message: error.message});
            if(error instanceof EntityFieldException) return this.httpResponse.BAD_REQUEST(res, {message: error.message})
        }
    }
}