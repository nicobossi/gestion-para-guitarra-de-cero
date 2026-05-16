import type { Lesson } from "@/main/features/lesson/domain/lesson";
import type { Student } from "@/main/features/student/domain/student";




export interface StudentRepository {
    income(student : Student) : Promise<Student>
    resumeLessons(student : Student, lessons : Lesson[]) : Promise<Student>
}