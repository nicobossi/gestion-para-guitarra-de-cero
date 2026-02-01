import StudentProvider from './context/student.provider';
import IncomeStudentPage from './pages/income-student/IncomeStudent';
import './student.css'


const Student = () => {

    return (
        <StudentProvider>
            <IncomeStudentPage />
        </StudentProvider>
    )
}

export default Student;