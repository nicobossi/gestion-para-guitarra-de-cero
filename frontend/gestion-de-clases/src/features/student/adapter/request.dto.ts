import type { Student } from "@/globals/types/student"


export type StudentRequestDto = Omit<Student, "submissionDate" | "phone" | "id"> & {
    phone: string
    submissionDate: string
}

const requestDto = (student : Student) : StudentRequestDto => {
    return {
        name: student.name,
        secondName: student.secondName,
        surname: student.surname,
        phone: student.phone.toString(),
        submissionDate: student.submissionDate.toString()
    }
}

export default requestDto;