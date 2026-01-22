import type { Student } from "@/main/domain/student/student";
import type { StudentService } from "./student-service.i";
import type { StudentDao } from "@/main/persistence/sql/student/student-dao.i";


export class StudentServiceImpl implements StudentService {
    
    private dao : StudentDao;

    constructor(dao : StudentDao) {
        this.dao = dao;
    }
    
    async income(student: Student) : Promise<Student> {
        return await this.dao.save(student);
    }
}