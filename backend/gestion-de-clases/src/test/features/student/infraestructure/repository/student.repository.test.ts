import type { StudentRepository } from "@/main/features/student/infraestructure/persistence/repository/student.repository.i"
import clearAll from "./clear-all"
import { Student } from "@/main/features/student/domain/student";
import studentRepository from "@/main/features/student/infraestructure/persistence/repository/instance";



describe("tests to student repository", () => {

    let repository = studentRepository;
    let student : Student;
    let submissionDate : Date; 

    beforeEach(() => {
        submissionDate = new Date();
        student = new Student("Nicolás", "Bossi", 1234567898, submissionDate, "Fernando");
    })

    test("a repository add a student", async () => {

        const addedStudent = await repository.income(student);
        expect(addedStudent.getId).toBeDefined();
    })

    afterEach(clearAll);
})