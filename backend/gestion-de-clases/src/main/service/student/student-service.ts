import type { Student } from "@/main/domain/student/student";
import type { StudentService } from "./student-service.i";
import type { StudentDao } from "@/main/persistence/sql/student-sql/student-dao.i";


export class StudentServiceImpl implements StudentService {
    
    private dao : StudentDao;

    constructor(dao : StudentDao) {
        this.dao = dao;
    }
    
    async income(student: Student) : Promise<Student> {
        try {
            return await this.dao.save(student);
        }
        catch(error : unknown) {
            throw new Error("aa");
        }
    }
    
}