import IncomeContent from './components/income-content/IncomeContent';
import './income-student.css'
import ModalStudent from './components/modal-student/ModalIncome';
import { AddStudentProvider, useValidateAddContext } from './context/add-student';
import incomeStudent from './services/income-student';

const IncomePanel = () => {

    return (
        <AddStudentProvider income = {incomeStudent}>
            <PageContent />
        </AddStudentProvider>
    )
}

const PageContent = () => {

    const { data } = useValidateAddContext();

    return (
        <section className = 'student-income'>
            {data && <ModalStudent student = {data} />}
            <IncomeContent />
        </section>
    )
}

export default IncomePanel;
