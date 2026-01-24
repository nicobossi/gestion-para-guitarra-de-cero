import { StudentController } from "@/main/api/student/student.controller";
import service from "./student.service";
import { StudentMapper as StudentMapper } from "@/main/dto/student/student.mapper";
import { HttpResponse } from "@/main/api/http-response";


const mapper = new StudentMapper();
const httpResponse =  new HttpResponse();
const studentController = new StudentController(service, mapper, httpResponse);

export default studentController;