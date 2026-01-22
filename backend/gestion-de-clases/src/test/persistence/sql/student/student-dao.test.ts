import { Student } from "@/main/domain/student/student";
import type { StudentDaoImpl } from "@/main/persistence/sql/student/student-dao";
import studentDao from "@/main/routes/student/student-dao";
import clearAll from "./clear-all";
import { RepeatEntityException } from "@/main/persistence/sql/repeat-entity-exception";


describe("tests to student DAO", () => {

    const dao : StudentDaoImpl = studentDao;
    let student : Student;
    let submissionDate : Date;
    
    beforeEach(() => {
        submissionDate = new Date(2026, 1, 18, 16, 4);
        student = new Student("Nicolás", "Bossi", 1162870692, submissionDate, "Fernando");
    });

    test("a student is added", async () => {
        
        const addedStudent : Student = await dao.save(student);
        expect(addedStudent.getId).toBeDefined();
    });

    test("a student is not added with id repeat", async () => {

        const addedStudent : Student = await dao.save(student);
        const sameStudentAdded = async () => await dao.save(addedStudent);
        await expect(sameStudentAdded()).rejects.toThrow(RepeatEntityException);
    });

    afterEach(() => clearAll()); 
});