import SideBar from '@/globals/components/side-bar/SideBar';
import IncomeFormContainer from '../../components/income-form/IncomeForm';
import './income-student.css'
import StudentContext from '../../context/student.context';
import useStudent from '../../hooks/useStudent';



/* 

    - hacer un custom hook para pegarle al servicio, manejar la carga y el error.
    - hacer un custom hook que sea reutilizado por este para manejar la carga y el error.
    - hacer un adapter para enviar la info al backend y para que la readapte la respuesta para el componete
*/
const IncomeStudentPage = () => {

    const {student, isError, isLoading, income} = useStudent();

    return (
        <StudentContext.Provider value = {student}>
            <section className="student-income">
                <SideBar />
                {isLoading && <p>cargando...</p>}
                {student && <p>Modal del estudiante</p>}
                {isError && <p>Error</p>}
                <IncomeFormContainer onSubmit = {income} />
            </section>
        </StudentContext.Provider>
    )
}

export default IncomeStudentPage;