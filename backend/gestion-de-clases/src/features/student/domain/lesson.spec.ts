import { Lesson } from './lesson';

describe('Unit Lesson', () => {
    let lesson: Lesson;
    let attendanceDate: Date;

    beforeEach(() => {
        attendanceDate = new Date(2026, 5, 13, 15);
        lesson = new Lesson(attendanceDate);
    });

    test('should not initially be locked up', () => {
        expect(lesson.getIsCancel).toBeFalsy();
    });

    test('should have a attendance date', () => {
        const date = new Date(2026, 5, 13, 15);
        expect(lesson.getAttendanceDate.getFullYear()).toBe(date.getFullYear());
        expect(lesson.getAttendanceDate.getMonth()).toBe(date.getMonth());
        expect(lesson.getAttendanceDate.getDay()).toBe(date.getDay());
        expect(lesson.getAttendanceDate.getTime()).toBe(date.getTime());
    });
});
