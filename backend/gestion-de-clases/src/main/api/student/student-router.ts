import { Router } from "express"
import studentSchema from "./schema";
import type { StudentRequestDto } from "@/main/dto/student/types/request-dto";
import studentController from "@/main/instance/student/student.controller";
import validatorMiddleware from "@/main/instance/student/student.validator-middleware";



const studentRouter = () => {

    const route = Router();

    route.post("/income", 
        validatorMiddleware.validate<StudentRequestDto>(studentSchema), 
        (req, res) => studentController.post(req, res));

    return route;

}

export default studentRouter;