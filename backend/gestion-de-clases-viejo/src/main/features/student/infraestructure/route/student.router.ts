import { Router } from "express"
import { HttpRequest } from "@/main/shared/infraestructure/http/http-request/http-request";
import type { BodyValidatorMiddleware } from "@/main/shared/infraestructure/middlewares/body-validator/body-validator.middleware";
import type { StudentControllerRest } from "../../application/controller/student.controller";


export class StudentRouter {

    private readonly router : Router = Router();
    private readonly path : string = "/api/student";
    private bodyValidator : BodyValidatorMiddleware;
    private controller : StudentControllerRest

    constructor(bodyValidator : BodyValidatorMiddleware, controller : StudentControllerRest) {
        this.bodyValidator = bodyValidator;
        this.controller = controller;
    }

    get getPath() : string {
        return this.path;
    }

    routes() : Router {
        this.router.post(
            "/income", 
            this.bodyValidator.validate(), 
            HttpRequest.execute(this.controller.post)
        );

        return this.router;
    }
}