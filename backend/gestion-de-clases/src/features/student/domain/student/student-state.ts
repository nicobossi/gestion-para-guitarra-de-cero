import { Lesson } from '../lesson/lesson';
import { Student } from './student';

export interface StudentState {
    getLesson(student: Student, index: number): Lesson;
    payment(student: Student): Lesson[];
    addLessons(lessons?: Lesson[]): Lesson[];
}
