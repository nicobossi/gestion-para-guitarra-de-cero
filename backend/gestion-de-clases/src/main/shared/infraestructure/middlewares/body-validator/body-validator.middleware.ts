import type { RequestHandler } from "express";
import { type AnyObject, type ObjectSchema } from "yup";

export class BodyValidatorMiddleware {

    private readonly schema : ObjectSchema<AnyObject>

    constructor(schema : ObjectSchema<AnyObject>) {
        this.schema = schema;
    }

    validate() : RequestHandler {
        return async (req, _, next) => {
            await this.schema.validate(req.body);
            next();
        }
    }
}