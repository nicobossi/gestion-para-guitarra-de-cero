import { Router } from "express"
import studentSchema from "../schema/schema";
import studentController from "@/main/features/student/application/controller/instance";
import validatorMiddleware from "@/main/shared/infraestructure/middlewares/body-validator/instance";



const studentRouter = () => {

    const route = Router();

    route.post("/income", validatorMiddleware.validate(studentSchema), (req, res) => studentController.post(req, res));

    return route;

}

export default studentRouter;