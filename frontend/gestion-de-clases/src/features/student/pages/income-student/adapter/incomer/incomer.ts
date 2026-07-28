import type { Student } from "@/shared/domain/student/student"

export type Incomer = Omit<Student, "submissionDate" | "phone" | "id"> & {
    phone: string
    submissionDate: string
}
