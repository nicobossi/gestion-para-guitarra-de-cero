import { StudentControllerRest } from "@/main/features/student/application/controller/student.controller";
import { StudentMapper as StudentMapper } from "@/main/features/student/infraestructure/dtos/student.mapper";
import service from "@/main/features/student/application/service/instance";


const mapper = new StudentMapper();
const studentController = new StudentControllerRest(service, mapper);

export default studentController;