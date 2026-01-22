import { StudentServiceImpl } from "@/main/service/student/student-service";
import studentRepository from "./student-repository";



const service = new StudentServiceImpl(studentRepository);

export default service;