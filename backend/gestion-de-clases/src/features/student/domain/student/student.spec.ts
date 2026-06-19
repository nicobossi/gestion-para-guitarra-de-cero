import { InvalidLessons } from '../exception/invalid-lessons';
import { InvalidPhoneException } from '../exception/invalid-phone-exception';
import { Lesson } from '../lesson/lesson';
import { Student } from './student';

describe('test to student', () => {
    let nicolas: Student;
    let fechaDePresentacion: Date;

    beforeEach(() => {
        fechaDePresentacion = new Date(2026, 0, 1);
        nicolas = new Student(
            'Nicolás',
            'Bossi',
            1162870692,
            fechaDePresentacion,
            'Fernando',
        );
    });

    test('a student have a name', () => {
        expect('Nicolás').toBe(nicolas.getName);
    });

    test('a student have a surname', () => {
        expect('Bossi').toBe(nicolas.getSurname);
    });

    test('a student have a second name', () => {
        expect('Fernando').toBe(nicolas.getSecondName);
    });

    test('a student have not a second name', () => {
        const alejandro = new Student(
            'Alejandro',
            'Romero',
            1234567808,
            fechaDePresentacion,
        );
        expect(alejandro.getSecondName).toBeNull();
    });

    test('a student have a date assistance', () => {
        expect(fechaDePresentacion).toBe(nicolas.getFirstLessonDate);
    });

    test('a student have a phone number', () => {
        expect(1162870692).toBe(nicolas.getPhoneNumber);
    });

    test('A student cannot have a cell phone with fewer than 10 characters', () => {
        const alejandro = () =>
            new Student('Alejandro', 'Romero', 12345678, fechaDePresentacion);

        expect(alejandro).toThrow(InvalidPhoneException);
    });

    test('A student cannot have a cell phone with more than 10 characters', () => {
        const carlos = () =>
            new Student(
                'Alejandro',
                'Romero',
                12345678777,
                fechaDePresentacion,
            );

        expect(carlos).toThrow(InvalidPhoneException);
    });

    test('should create four lesson', () => {
        const lessons = nicolas.payment();
        expect(lessons.length).toBe(4);
    });

    test('should create four lesson for week', () => {
        const lessons = nicolas.payment();
        const firstWeek =
            lessons[1].getAttendanceDate.getDate() -
            lessons[0].getAttendanceDate.getDate();
        const secondWeek =
            lessons[2].getAttendanceDate.getDate() -
            lessons[1].getAttendanceDate.getDate();
        const threeWeek =
            lessons[3].getAttendanceDate.getDate() -
            lessons[2].getAttendanceDate.getDate();

        expect(firstWeek).toBe(7);
        expect(secondWeek).toBe(7);
        expect(threeWeek).toBe(7);
    });

    test('should have the first lesson in submission date', () => {
        const lessons = nicolas.payment();
        const firstLessonDate = lessons[0].getAttendanceDate;
        expect(firstLessonDate).toBe(nicolas.getFirstLessonDate);
    });

    test('should be a week gap between the last class and the first class of the next payment', () => {
        const firstLesson = nicolas.payment();
        const secondLessons = nicolas.payment();
        const gapWeek =
            secondLessons[0].getAttendanceDate.getDate() -
            firstLesson[3].getAttendanceDate.getDate();
        expect(gapWeek).toBe(7);
    });

    test('should initially have a lessons', () => {
        const lessons = [
            new Lesson(new Date()),
            new Lesson(new Date()),
            new Lesson(new Date()),
            new Lesson(new Date()),
        ];
        const nicolas = new Student(
            'Nicolás',
            'Romero',
            1234567877,
            fechaDePresentacion,
            'Matias',
            1,
            lessons,
        );
        expect(nicolas.getLessons.length).toBe(4);
    });

    test('should not have fewer than 4 classes', () => {
        const emptyLessons = [new Lesson(new Date())];
        const nicolas = () =>
            new Student(
                'Nicolás',
                'Romero',
                1234567877,
                fechaDePresentacion,
                'Matias',
                1,
                emptyLessons,
            );
        expect(nicolas).toThrow(InvalidLessons);
    });

    test('should not have more than 4 classes', () => {
        const emptyLessons = [
            new Lesson(new Date()),
            new Lesson(new Date()),
            new Lesson(new Date()),
            new Lesson(new Date()),
            new Lesson(new Date()),
        ];
        const nicolas = () =>
            new Student(
                'Nicolás',
                'Romero',
                1234567877,
                fechaDePresentacion,
                'Matias',
                1,
                emptyLessons,
            );
        expect(nicolas).toThrow(InvalidLessons);
    });
});
