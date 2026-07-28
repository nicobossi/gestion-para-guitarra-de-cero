import ModalFee from './components/modal-fee/ModalFee';
import IncomeFee from './components/income-fee/IncomeFee';
import saveFee from './services/save-fee';
import { FeeProvider, useValidateAddContext } from './contexts/add-fee';
import AddPanelContainer from '@/shared/components/add-panel-container/AddPanelContainer';

const AddFeePanel = () => {

    return (
        <FeeProvider income = {saveFee}>
            <AddFeePage />
        </FeeProvider>
    )
}

const AddFeePage = () => {

    const { data } = useValidateAddContext();

    return (
        <AddPanelContainer>
            {data && <ModalFee fee = {data} />}
            <IncomeFee />
        </AddPanelContainer>
    )
}

export default AddFeePanel;