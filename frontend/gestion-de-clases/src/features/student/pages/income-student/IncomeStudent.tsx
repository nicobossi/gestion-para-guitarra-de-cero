import SideBar from '@/globals/components/side-bar/SideBar';
import IncomeFormContainer from '../../components/income-form/IncomeForm';
import './income-student.css'
import StudentContext from '../../context/student.context';
import useStudent from '../../hooks/useStudent';
import ModalIncome from '../../components/modal-income/ModalIncome';


const IncomeStudentPage = () => {

    const {student, isError, isLoading, income} = useStudent();

    return (
        <StudentContext.Provider value = {student}>
            <section className = 'student-income'>
                <SideBar />
                {isLoading && <p>cargando...</p>}
                {student && <ModalIncome />}
                {isError && <p>Error</p>}
                <IncomeFormContainer onSubmit = {income} />
            </section>
        </StudentContext.Provider>
    )
}

export default IncomeStudentPage;