import type { StudentDaoImpl } from "@/main/features/student/infraestructure/persistence/sql/student.dao";
import clearAll from "./clear-all";
import { RepeatEntityException } from "@/main/shared/infraestructure/persistence/exceptions/repeat-entity-exception";
import studentDao from "@/main/features/student/infraestructure/persistence/sql/instance";
import { Student } from "@/main/features/student/domain/student";


describe("tests to student DAO", () => {

    const dao : StudentDaoImpl = studentDao;
    let student : Student;
    let submissionDate : Date;
    
    beforeEach(() => {
        submissionDate = new Date(2026, 1, 18, 16, 4);
        student = new Student("Nicolás", "Bossi", 1162870692, submissionDate, "Fernando");
    });

    test("a student is added", async () => {
        
        const studentAdded : Student = await dao.save(student);
        expect(studentAdded.getId).toBeDefined();
    });

    test("a student is not added with id repeat", async () => {

        const studentAdded : Student = await dao.save(student);
        const sameStudentAdded = async () => await dao.save(studentAdded);
        await expect(sameStudentAdded()).rejects.toThrow(RepeatEntityException);
    });

    afterEach(() => clearAll()); 
});