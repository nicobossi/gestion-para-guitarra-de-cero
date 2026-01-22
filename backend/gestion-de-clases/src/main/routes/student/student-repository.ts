import { StudentRepositoryImpl } from "@/main/persistence/repository/student/student-repository";
import type { StudentRepository } from "@/main/persistence/repository/student/student-repository.i";
import studentDao from "./student-dao";
import lessonDao from "../lesson/lesson-dao";


const studentRepository : StudentRepository = new StudentRepositoryImpl(studentDao, lessonDao);

export default studentRepository;