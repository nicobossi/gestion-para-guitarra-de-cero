import { Lesson } from "@/main/domain/lesson/lesson";



describe("test to class", () => {

    let dateAssistance : Date;
    let guitarLesson : Lesson; 

    beforeEach(() => {
        dateAssistance = new Date(2026, 1, 18, 14, 0);
        guitarLesson = new Lesson(dateAssistance);
    });

    test("a class have a date", () => {
        expect(dateAssistance.getDate()).toBe(guitarLesson.getDate);
    });
})