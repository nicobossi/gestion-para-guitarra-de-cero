import type { Student } from "@/main/features/student/domain/student";


export interface StudentDao {
    save(student : Student) : Promise<Student>
}