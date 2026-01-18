import { Student } from "@/main/domain/student/student";


describe("test to student", () => {

    let nicolas : Student;
    let fechaDeAsistencia : Date;

    beforeEach(() => {
        fechaDeAsistencia = new Date(2026, 1, 18, 16, 4);
        nicolas = new Student("Nicolás", "Bossi", 1162870692, fechaDeAsistencia, "Fernando");
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
        const alejandro = new Student("Alejandro", "Romero", 12345678, fechaDeAsistencia);
        expect(alejandro.getSecondName).toBeUndefined();
    });

    test("a student have a date assistance", () => {
        expect(fechaDeAsistencia).toBe(nicolas.getDateAssistance);
    });

    test("a student have a phone number", () => {
        expect(1162870692).toBe(nicolas.getPhoneNumber);
    });
})