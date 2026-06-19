import { Lesson } from '../lesson/lesson';

export class Calender {
    registerLessons(firstLessonDate: Date): Lesson[] {
        const lessons = [new Lesson(firstLessonDate)];
        let currentLesson = lessons[0];

        for (let i = 0; i < 3; i++) {
            currentLesson = new Lesson(
                this.nextDate(currentLesson.getAttendanceDate),
            );
            lessons.push(currentLesson);
        }

        return lessons;
    }
    nextDate(prevDate: Date): Date {
        const date = new Date(prevDate);
        date.setDate(this.nextWeek(prevDate));
        return date;
    }

    nextWeek(date: Date): number {
        return date.getDate() + 7;
    }
}
