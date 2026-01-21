import { StudentController } from "@/main/api/student/student-controller";
import service from "./student-service";
import { StudentMapper as StudentMapper } from "@/main/dto/student/student-mapper";


const mapper = new StudentMapper();
const studentController = new StudentController(service, mapper);

export default studentController;