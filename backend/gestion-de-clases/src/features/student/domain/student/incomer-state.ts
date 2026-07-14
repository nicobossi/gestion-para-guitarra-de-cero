/* eslint-disable @typescript-eslint/no-unused-vars */
import { InvalidLessons } from '../exception/invalid-lessons';
import { Lesson } from '../lesson/lesson';
import { Student } from './student';
import { StudentState } from './student-state';

export class IncomerState implements StudentState {
    getLesson(student: Student, index: number): Lesson {
        throw new InvalidLessons('Un estudiante ingresante no tiene clases');
    }
    payment(student: Student): Lesson[] {
        return student.renewLessons(student.getFirstLessonDate);
    }
    getInitLessons(_?: Lesson[]): Lesson[] {
        return [];
    }
}
