import type { Entrant } from "@/globals/types/student";
import { URL_STUDENT_INCOME } from "@/infraestructure/api-urls";
import axios from "@/infraestructure/request-config";


type Student = {
    id?: number
    name: string,
    secondName: string,
    surname: string,
    phone: string,
    submissionDate : Date
}

const incomeStudent = async (entrant : Entrant) : Promise<Entrant> => {

    try {
        const student = {
            name: entrant.name,
            secondName: entrant.secondName,
            surname: entrant.surname,
            phone: entrant.phone.toString(),
            submissionDate: entrant.submissionDate
        }
        const newStudent = await axios.post<Student>(URL_STUDENT_INCOME, student);
        const newDate : Date = new Date(newStudent.data.submissionDate)
        const newEntrant : Entrant = {
            name: newStudent.data.name,
            secondName: newStudent.data.secondName,
            surname: newStudent.data.surname,
            phone: Number.parseInt(newStudent.data.phone),
            submissionDate: newDate,
        }
        return newEntrant;
    }
    catch(error : unknown) {
        return Promise.reject(error);
    }
}

export default incomeStudent;