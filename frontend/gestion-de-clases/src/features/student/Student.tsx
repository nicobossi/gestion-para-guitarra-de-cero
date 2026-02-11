import StudentProvider from './contexts/student.provider';
import IncomeStudentPage from './pages/income-student/IncomeStudent';


const Student = () => {

    return (
        <StudentProvider>
            <IncomeStudentPage />
        </StudentProvider>
    )
}

export default Student;