import { BodyValidatorMiddleware } from "@/main/shared/infraestructure/middlewares/body-validator/body-validator.middleware";
import { StudentRouter } from "./student.router";
import studentSchema from "../schema/schema";
import studentController from "../../application/controller/instance";


const bodyValidator = new BodyValidatorMiddleware(studentSchema);
const studentRouter = new StudentRouter(bodyValidator, studentController);

export default studentRouter;