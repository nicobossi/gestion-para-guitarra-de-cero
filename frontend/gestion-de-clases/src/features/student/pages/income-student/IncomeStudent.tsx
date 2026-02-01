import SideBar from '@/globals/components/side-bar/SideBar';
import IncomeContent from '../../components/income-content/IncomeContent';
import './income-student.css'
import ModalIncome from '../../components/modal-income/ModalIncome';
import useStudentContext from '../../context/useStudent-validate';


const IncomeStudentPage = () => {

    const {student} = useStudentContext();

    return (
        <section className = 'student-income'>
            <SideBar />
            {student && <ModalIncome />}
            <IncomeContent />
        </section>
    )
}

export default IncomeStudentPage;