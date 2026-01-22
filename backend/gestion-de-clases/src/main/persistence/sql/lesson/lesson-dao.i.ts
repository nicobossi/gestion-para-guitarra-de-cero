import type { Lesson } from "@/main/domain/lesson/lesson";



export interface LessonSqlDao {
    saveMany(lesson : Lesson[]) : Lesson[];
}