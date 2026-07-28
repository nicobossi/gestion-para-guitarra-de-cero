import IncomeContent from './components/income-content/IncomeContent';
import ModalStudent from './components/modal-student/ModalIncome';
import { AddStudentProvider, useValidateAddContext } from './context/add-student';
import incomeStudent from './services/income-student';
import AddPanelContainer from '@/shared/components/add-panel-container/AddPanelContainer';

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
        <AddPanelContainer>
            {data && <ModalStudent student = {data} />}
            <IncomeContent />
        </AddPanelContainer>
    )
}

export default IncomePanel;
