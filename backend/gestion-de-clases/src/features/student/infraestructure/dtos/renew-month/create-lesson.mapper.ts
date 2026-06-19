import {
    LessonCreateInput,
    LessonModel,
} from '../../../../../../generated/prisma/models';
import { Lesson } from '../../../domain/lesson/lesson';

export class CreateLesson {
    static modelToSql(lessons: Lesson[], id: number): LessonCreateInput[] {
        return lessons.map<LessonCreateInput>((lesson) =>
            CreateLesson.lessonToSql(lesson, id),
        );
    }

    static lessonToSql(lesson: Lesson, id: number): LessonCreateInput {
        return {
            isCancel: lesson.getIsCancel,
            attendanceDate: lesson.getAttendanceDate,
            student: {
                connect: { id: id },
            },
        };
    }

    static sqlToModel(lessons: LessonModel[]): Lesson[] {
        return lessons.map<Lesson>((sql) => CreateLesson.sqlToLesson(sql));
    }

    static sqlToLesson(lesson: LessonModel): Lesson {
        return new Lesson(lesson.attendanceDate, lesson.id);
    }
}
