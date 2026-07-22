import type { Student } from "../../../../../shared/domain/student/student"


export type StudentRequestDto = Omit<Student, "submissionDate" | "phone" | "id"> & {
    phone: string
    submissionDate: string
}

const requestDto = (student : Student) : StudentRequestDto => {
    return {
        name: student.name,
        secondName: student.secondName,
        surname: student.surname,
        phone: codeArea + student.phone.toString(),
        submissionDate: student.submissionDate.toString()
    }
}

const codeArea = "+54"

export default requestDto;