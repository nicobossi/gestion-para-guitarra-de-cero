import type { RequestHandler } from "express";
import { type AnyObject, type ObjectSchema, type ValidateOptions } from "yup";

export class BodyValidatorMiddleware {

    private readonly schema : ObjectSchema<AnyObject>
    private readonly config : ValidateOptions<AnyObject>

    constructor(schema : ObjectSchema<AnyObject>) {
        this.schema = schema;
        this.config = {
            abortEarly: false,
            strict: true,
            stripUnknown: true
        }
    }

    validate() : RequestHandler {
        return async (req, _, next) => {
            await this.schema.validate(req.body, this.config);
            next();
        }
    }
}