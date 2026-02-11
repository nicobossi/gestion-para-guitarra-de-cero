import type { BodyValidatorMiddleware } from "@/main/shared/infraestructure/middlewares/body-validator/body-validator.middleware";
import { Router } from "express";
import type { FeeControllerRest } from "../../application/controller/fee.controller";
import { HttpRequest } from "@/main/shared/infraestructure/http/http-request/http-request";



export class FeeRouter {

    private readonly path : string = "/api/fee";
    private readonly router : Router = Router(); 
    private bodyValidator : BodyValidatorMiddleware;
    private controller : FeeControllerRest;

    constructor(bodyValidator : BodyValidatorMiddleware, controller : FeeControllerRest) {
        this.bodyValidator = bodyValidator;
        this.controller = controller;
    }

    get getPath() : string {
        return this.path;
    }

    routes() : Router {
        this.router.post(
            "/add",
            this.bodyValidator.validate(), 
            HttpRequest.execute(this.controller.post));

        return this.router;
    }

}