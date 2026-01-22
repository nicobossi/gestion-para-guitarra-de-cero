import type { Lesson } from "@/main/domain/lesson/lesson";
import type { Student } from "@/main/domain/student/student";




export interface StudentRepository {
    income(student : Student) : Promise<Student>
    resumeLessons(student : Student, lessons : Lesson[]) : Promise<Student>
}