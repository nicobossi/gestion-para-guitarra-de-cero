import type { RequestHandler } from "express";
import { ValidationError, type AnyObject, type Maybe, type ObjectSchema } from "yup";
import type { HttpResponse } from "../http-response";



export class ValidatorMiddleware {

    private readonly httpResponse : HttpResponse

    constructor(httpResponse : HttpResponse) {
        this.httpResponse = httpResponse;
    }

    validate(schema : ObjectSchema<AnyObject>) : RequestHandler {
        return async (req, res, next) => {
            try {
                await schema.validate(req.body);
                next();
            }
            catch(error : unknown) {
                if(error instanceof ValidationError) return this.httpResponse.BAD_REQUEST(res, {message: error.message});
                else return this.httpResponse.SERVER_ERROR(res, {message: "Error desconocido"});
            }
        }
    }
}