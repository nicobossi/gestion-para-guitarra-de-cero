import type { StudentDaoImpl } from "@/main/features/student/infraestructure/persistence/sql/student.dao";
import clearAll from "./clear-all";
import studentDao from "@/main/features/student/infraestructure/persistence/sql/instance";
import { Student } from "@/main/features/student/domain/student";
import { RepeatEntityException } from "@/main/shared/infraestructure/persistence/errors/exceptions/exceptions";


describe("tests to student DAO", () => {

    const dao : StudentDaoImpl = studentDao;
    let student : Student;
    let submissionDate : Date;
    
    beforeEach(() => {
        submissionDate = new Date(2026, 1, 18, 16, 4);
        student = new Student("Nicolás", "Bossi", 1162870692, submissionDate, "Fernando");
    });

    test("a student is added", async () => {
        
        const studentAdded = await dao.save(student);
        expect(studentAdded.getId).toBeDefined();
    });

    test("a student is not added with id repeat", async () => {

        const studentAdded = await dao.save(student);
        const sameStudentAdded = async () => await dao.save(studentAdded);
        await expect(sameStudentAdded).rejects.toThrow(RepeatEntityException);
    });

    afterEach(() => clearAll()); 
});