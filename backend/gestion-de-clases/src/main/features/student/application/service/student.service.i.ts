import type { Student } from "@/main/features/student/domain/student";



export interface StudentService {
    income(student : Student) : Promise<Student>
}