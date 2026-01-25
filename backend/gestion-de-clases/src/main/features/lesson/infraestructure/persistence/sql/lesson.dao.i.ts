import type { Lesson } from "@/main/features/lesson/domain/lesson";



export interface LessonSqlDao {
    saveMany(lesson : Lesson[]) : Lesson[];
}