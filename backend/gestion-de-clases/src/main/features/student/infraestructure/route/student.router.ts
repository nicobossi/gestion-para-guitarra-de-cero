import { Router, type RequestHandler } from "express"
import studentSchema from "../schema/schema";
import studentController from "@/main/features/student/application/controller/instance";
import bodyValidator from "@/main/shared/infraestructure/middlewares/body-validator/instance";
import { HttpRequest } from "@/main/shared/infraestructure/http/http-request/http-request";


export class StudentRouter {

    private router : Router = Router();
    private path : string = "/api/student";
    private schema : RequestHandler = bodyValidator.validate(studentSchema);

    get getPath() : string {
        return this.path;
    }

    routes() : Router {
        this.router.post("/income", this.schema, HttpRequest.execute(studentController.post));
        return this.router;
    }
}