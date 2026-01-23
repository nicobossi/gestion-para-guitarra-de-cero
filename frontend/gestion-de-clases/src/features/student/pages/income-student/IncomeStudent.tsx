import SideBar from '@/globals/components/side-bar/SideBar';
import IncomeFormContainer from '../../components/income-form/IncomeForm';
import './income-student.css'
import { useState } from 'react';
import type { Entrant } from '@/globals/types/student';
import StudentContext from '../../context/student.context';
import incomeStudent from '../../services/income-student';


const IncomeStudentPage = () => {

    const [student, setStudent] = useState<Entrant | null>(null)

    const incomingStudent = (student : Entrant) => {
        const newStudent : Entrant = incomeStudent(student);
        setStudent(newStudent);
    }

    return (
        <StudentContext.Provider value = {student}>
            <section className="student-income">
                <SideBar />
                <IncomeFormContainer onSubmit = {incomingStudent} />
            </section>
        </StudentContext.Provider>
    )
}

export default IncomeStudentPage;