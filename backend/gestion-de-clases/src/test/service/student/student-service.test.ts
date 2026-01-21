import { Student } from "@/main/domain/student/student";
import clearAll from "./clear-all";
import type { StudentServiceImpl } from "@/main/service/student/student-service";
import studentService from "@/main/routes/dependecy/student/student-service";


describe("tests to student service", () => {

    const service : StudentServiceImpl = studentService;
    let submissionDate : Date;
    let student : Student;

    beforeEach(() => {
        submissionDate = new Date(2026, 1, 18, 16, 4);
        student = new Student("Nicolás", "Bossi", 1162870692, submissionDate, "Fernando");
    });

    test("a student is incoming", async () => {
        const addedStudent : Student = await service.income(student);
        expect(addedStudent.getId).toBeDefined();
    })

    afterEach(async () => await clearAll()); 
});