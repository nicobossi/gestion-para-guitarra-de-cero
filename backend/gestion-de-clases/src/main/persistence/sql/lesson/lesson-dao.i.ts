import type { Lesson } from "@/main/domain/lesson/lesson";



export interface LessonSqlDao {
    save(lesson : Lesson) : Lesson;
}