import { StudentServiceImpl } from "@/main/service/student/student-service";
import studentDao from "./student-dao";



const service = new StudentServiceImpl(studentDao);

export default service;