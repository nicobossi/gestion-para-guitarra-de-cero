import SideBar from '@/globals/components/side-bar/SideBar';
import IncomeFormContainer from '../../components/income-form/IncomeForm';
import './income-student.css'
import { useState } from 'react';
import type { Entrant } from '@/globals/types/student';
import StudentContext from '../../context/student.context';
import incomeStudent from '../../services/income-student';



/* 

    hacer un custom hook para pegarle al servicio, manejar la carga y el error.
    hacer un hook que sea reutilizado por este para manejar la carga y el error.
*/
const IncomeStudentPage = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [student, setStudent] = useState<Entrant | null>(null)

    const incomingStudent = (student : Entrant) => {
        console.log(student)
        setIsLoading(true);
        incomeStudent(student)
            .then((student) => {
                setIsLoading(false);
                setStudent(student)
                console.log(student)
            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true)
                console.log(error)
            });
    }

    return (
        <StudentContext.Provider value = {student}>
            <section className="student-income">
                <SideBar />
                {isLoading && <p>cargando...</p>}
                {student && <p>Modal del estudiante</p>}
                {isError && <p>Error</p>}
                <IncomeFormContainer onSubmit = {incomingStudent} />
            </section>
        </StudentContext.Provider>
    )
}

export default IncomeStudentPage;