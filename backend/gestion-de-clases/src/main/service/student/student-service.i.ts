import type { Student } from "@/main/domain/student/student";



export interface StudentService {
    income(student : Student) : Promise<Student>
}