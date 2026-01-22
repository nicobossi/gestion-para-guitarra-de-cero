import type { Student } from "@/main/domain/student/student";
import type { StudentService } from "./student-service.i";
import type { StudentRepository } from "@/main/persistence/repository/student/student-repository.i";
import { Lesson } from "@/main/domain/lesson/lesson";


export class StudentServiceImpl implements StudentService {
    
    private dao : StudentRepository;

    constructor(dao : StudentRepository) {
        this.dao = dao;
    }
    
    async income(student: Student) : Promise<Student> {
        //refactorizar cuanto antes
        return await this.dao.incomingWithLesson(student, [new Lesson(new Date())]);
    }
}