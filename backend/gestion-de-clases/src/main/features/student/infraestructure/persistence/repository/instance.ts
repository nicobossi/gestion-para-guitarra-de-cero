import { StudentRepositoryImpl } from "@/main/features/student/infraestructure/persistence/repository/student.repository";
import type { StudentRepository } from "@/main/features/student/infraestructure/persistence/repository/student.repository.i";
import studentDao from "../sql/instance";
import lessonDao from "@/main/instance/lesson/lesson.dao";


const studentRepository : StudentRepository = new StudentRepositoryImpl(studentDao, lessonDao);

export default studentRepository;