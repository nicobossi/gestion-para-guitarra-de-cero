import type { RequestHandler } from "express";
import { type AnyObject, type ObjectSchema } from "yup";

export class BodyValidatorMiddleware {

    validate(schema : ObjectSchema<AnyObject>) : RequestHandler {
        return async (req, _, next) => {
            await schema.validate(req.body);
            next();
        }
    }
}