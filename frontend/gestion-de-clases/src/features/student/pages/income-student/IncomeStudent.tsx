import SideBar from '@/globals/components/side-bar/SideBar';
import IncomeFormContainer from '../../components/income-form/IncomeForm';
import './income-student.css'


const IncomeStudentPage = () => {

    const incomingStudent = (student : unknown) => {
        console.log(student);
    }

    return (
        <section className="student-income">
            <SideBar />
            <IncomeFormContainer onSubmit = {incomingStudent} />
        </section>
    )
}

export default IncomeStudentPage;