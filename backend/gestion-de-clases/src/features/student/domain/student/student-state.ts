import { Lesson } from '../lesson/lesson';
import { Student } from './student';

export interface StudentState {
    payment(student: Student): Lesson[];
    addLessons(lessons?: Lesson[]): Lesson[];
}
