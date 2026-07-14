import { InvalidLessons } from '../exception/invalid-lessons';
import { Lesson } from '../lesson/lesson';
import { Student } from './student';
import { StudentState } from './student-state';

export class RenewState implements StudentState {
    getLesson(student: Student, index: number): Lesson {
        return student.getLessons[index];
    }
    payment(student: Student): Lesson[] {
        return student.renewLessons(student.firtsNextMonthDate());
    }
    getInitLessons(lessons: Lesson[]): Lesson[] {
        if (lessons.length != 4) {
            throw new InvalidLessons('Deben ser excactamente 4 lecciones');
        }
        return this.orderLessons(lessons);
    }
    private orderLessons(lessons: Lesson[]) {
        return lessons.sort(
            (a, b) =>
                a.getAttendanceDate.getTime() - b.getAttendanceDate.getTime(),
        );
    }
}
