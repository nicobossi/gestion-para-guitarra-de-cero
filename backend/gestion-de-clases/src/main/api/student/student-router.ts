import studentController from "@/main/routes/student/student-controller";
import { Router } from "express"
import studentSchema from "./schema";
import type { StudentRequestDto } from "@/main/dto/student/types/request-dto";



const studentRouter = () => {

    const route = Router();

    route.post("/income", studentController.validateBody<StudentRequestDto>(studentSchema), (req, res) => studentController.post(req, res));

    return route;

}

export default studentRouter;