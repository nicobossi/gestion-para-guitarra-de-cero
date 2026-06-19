/* eslint-disable @typescript-eslint/no-unused-vars */
import { Lesson } from '../lesson/lesson';
import { Student } from './student';
import { StudentState } from './student-state';

export class IncomerState implements StudentState {
    payment(student: Student): Lesson[] {
        return student.renewLessons(student.getFirstLessonDate);
    }
    addLessons(_?: Lesson[]): Lesson[] {
        return [];
    }
}
