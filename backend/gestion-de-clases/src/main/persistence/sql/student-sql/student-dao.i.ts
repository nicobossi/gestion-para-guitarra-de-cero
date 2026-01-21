import type { Student } from "@/main/domain/student/student";


export interface StudentDao {
    save(student : Student) : Promise<Student>
}