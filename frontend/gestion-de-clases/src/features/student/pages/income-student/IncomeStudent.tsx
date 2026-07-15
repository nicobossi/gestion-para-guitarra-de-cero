import SideBar from '@/shared/components/side-bar/SideBar';
import IncomeContent from './components/income-content/IncomeContent';
import './income-student.css'
import useStudentContext from './context/useStudent-validate';
import ModalStudent from './components/modal-student/ModalIncome';
import StudentProvider from './context/student.provider';

const IncomePanel = () => {

    return (
        <StudentProvider>
            <PageContent />
        </StudentProvider>
    )
}

const PageContent = () => {

    const {data} = useStudentContext();

    return (
        <section className='student-income'>
            <SideBar />
            {data && <ModalStudent student = {data} />}
            <IncomeContent />
        </section>
    )
}

export default IncomePanel;
