import {
    LessonModel,
    LessonUncheckedCreateWithoutStudentInput,
} from '../../../../../../generated/prisma/models';
import { Lesson } from '../../../domain/lesson/lesson';

export class CreateLesson {
    static modelToSql(
        lessons: Lesson[],
    ): LessonUncheckedCreateWithoutStudentInput[] {
        return lessons.map<LessonUncheckedCreateWithoutStudentInput>((lesson) =>
            CreateLesson.lessonToSql(lesson),
        );
    }

    static lessonToSql(
        lesson: Lesson,
    ): LessonUncheckedCreateWithoutStudentInput {
        return {
            isCancel: lesson.getIsCancel,
            attendanceDate: lesson.getAttendanceDate,
        };
    }

    static sqlToModel(lessons: LessonModel[]): Lesson[] {
        return lessons.map<Lesson>((sql) => CreateLesson.sqlToLesson(sql));
    }

    static sqlToLesson(lesson: LessonModel): Lesson {
        return new Lesson(lesson.attendanceDate, lesson.id);
    }
}
