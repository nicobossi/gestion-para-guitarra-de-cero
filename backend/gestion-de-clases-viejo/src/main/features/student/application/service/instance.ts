import { StudentServiceImpl } from "@/main/features/student/application/service/student.service";
import studentRepository from "@/main/features/student/infraestructure/persistence/repository/instance";



const service = new StudentServiceImpl(studentRepository);

export default service;