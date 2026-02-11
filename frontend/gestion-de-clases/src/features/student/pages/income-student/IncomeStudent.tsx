import SideBar from '@/globals/components/side-bar/SideBar';
import IncomeContent from '../../components/income-content/IncomeContent';
import './income-student.css'
import ModalStudent from '../../components/modal-student/ModalIncome';
import useStudentContext from '../../contexts/useStudent-validate';


const IncomeStudentPage = () => {

    const {data} = useStudentContext();

    return (
        <section className = 'student-income'>
            <SideBar />
            {data && <ModalStudent student = {data} />}
            <IncomeContent />
        </section>
    )
}

export default IncomeStudentPage;