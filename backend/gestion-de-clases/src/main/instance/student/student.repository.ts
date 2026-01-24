import { StudentRepositoryImpl } from "@/main/persistence/repository/student/student.repository";
import type { StudentRepository } from "@/main/persistence/repository/student/student.repository.i";
import lessonDao from "../lesson/lesson.dao";
import studentDao from "./student.dao";


const studentRepository : StudentRepository = new StudentRepositoryImpl(studentDao, lessonDao);

export default studentRepository;