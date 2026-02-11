import SideBar from '@/globals/components/side-bar/SideBar';
import IncomeContent from '../../components/income-content/IncomeContent';
import './income-student.css'
import ModalIncome from '../../components/modal-income/ModalIncome';
import useStudentContext from '../../contexts/useStudent-validate';


const IncomeStudentPage = () => {

    const {data} = useStudentContext();

    return (
        <section className = 'student-income'>
            <SideBar />
            {data && <ModalIncome student = {data} />}
            <IncomeContent />
        </section>
    )
}

export default IncomeStudentPage;