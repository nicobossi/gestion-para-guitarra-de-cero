import { StudentController } from "@/main/features/student/application/controller/student.controller";
import { StudentMapper as StudentMapper } from "@/main/features/student/infraestructure/dtos/student.mapper";
import service from "@/main/features/student/application/service/instance";
import httpResponse from "@/main/shared/infraestructure/http/http-response/instance";


const mapper = new StudentMapper();
const studentController = new StudentController(service, mapper, httpResponse);

export default studentController;