import type { Incomer } from "./incomer";

const requestDto = (student : Incomer) => {
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