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

        //const submissionDate = new Date(entrant.submissionDate);
        //const date = new Date(submissionDate.getUTCFullYear(), submissionDate.getMonth(), submissionDate.getDay(), entrant.submissionTime);
        const student = {
            id: entrant.id,
            name: entrant.name,
            secondName: entrant.secondName,
            surname: entrant.surname,
            phone: entrant.phone.toString(),
            submissionDate: new Date()
        }
        const newStudent = await axios.post<Student>(URL_STUDENT_INCOME, student);
        const newDate : Date = new Date(newStudent.data.submissionDate)
        const newEntrant : Entrant = {
            id: newStudent.data.id,
            name: newStudent.data.name,
            secondName: newStudent.data.secondName,
            surname: newStudent.data.surname,
            phone: Number.parseInt(newStudent.data.phone),
            submissionDate: newDate,
            submissionTime: newDate.getHours(), // ver para mostrar horasy minutos
        }
        return newEntrant;
    }
    catch(error : unknown) {
        return Promise.reject(error);
    }
}

export default incomeStudent;