import type { Student } from "@/globals/types/student";


export type StudentResponseDto = Omit<Student, "phone" | "submissionDate"> & {
    phone : string
    submissionDate : string
}

export const responseDto = (student : StudentResponseDto) : Student => {
    return {
        name: student.name,
        secondName: student.secondName,
        surname: student.surname,
        phone: Number.parseInt(student.phone),
        submissionDate: new Date(student.submissionDate),
    }
}