import { Student } from "@/main/domain/student/student";
import type { StudentDao } from "@/main/persistence/sql/student-sql/student-sql";
import studentDao from "@/main/routes/dependecy/student/student-dao";
import clearAll from "./clear-all";


describe("tests to student DAO", () => {

    let dao : StudentDao = studentDao;
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

    afterEach(() => {
        clearAll();
    }); 
});