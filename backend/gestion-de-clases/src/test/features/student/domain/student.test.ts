import { Student } from "@/main/features/student/domain/student";


describe("test to student", () => {

    let nicolas : Student;
    let fechaDePresentacion : Date;

    beforeEach(() => {
        fechaDePresentacion = new Date(2026, 1, 18, 16, 4);
        nicolas = new Student("Nicolás", "Bossi", 1162870692, fechaDePresentacion, "Fernando");
    });

    test("a student have a name", () => {
        expect("Nicolás").toBe(nicolas.getName);
    });

    test("a student have a surname", () => {
        expect("Bossi").toBe(nicolas.getSurname);
    });

    test("a student have a second name", () => {
        expect("Fernando").toBe(nicolas.getSecondName);
    });

    test("a student have not a second name", () => {
        const alejandro = new Student("Alejandro", "Romero", 12345678, fechaDePresentacion);
        expect(alejandro.getSecondName).toBeUndefined();
    });

    test("a student have a date assistance", () => {
        expect(fechaDePresentacion).toBe(nicolas.getSubmissionDate);
    });

    test("a student have a phone number", () => {
        expect(1162870692).toBe(nicolas.getPhoneNumber);
    });
})