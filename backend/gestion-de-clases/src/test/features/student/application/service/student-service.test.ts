import clearAll from "./clear-all";
import type { StudentServiceImpl } from "@/main/features/student/application/service/student.service";
import studentService from "@/main/features/student/application/service/instance";
import { Student } from "@/main/features/student/domain/student";


describe("tests to student service", () => {

    const service : StudentServiceImpl = studentService;
    let submissionDate : Date;
    let student : Student;

    beforeEach(() => {
        submissionDate = new Date(2026, 1, 18, 16, 4);
        student = new Student("Nicolás", "Bossi", 1162870692, submissionDate, "Fernando");
    });

    test("a student is incoming", async () => {
        const addedStudent = await service.income(student);
        expect(addedStudent.getId).toBeDefined();
    })

    afterEach(() => clearAll()); 
});