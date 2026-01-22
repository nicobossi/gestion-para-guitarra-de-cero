import type { Lesson } from "@/main/domain/lesson/lesson";
import type { Student } from "@/main/domain/student/student";




export interface StudentRepository {
    incomingWithLesson(student : Student, lessons : Lesson[]) : Student
}