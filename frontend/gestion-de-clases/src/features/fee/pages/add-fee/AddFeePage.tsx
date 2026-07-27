import './add-fee-page.css';
import ModalFee from './components/modal-fee/ModalFee';
import IncomeFee from './components/income-fee/IncomeFee';
import saveFee from './services/save-fee';
import { FeeProvider, useValidateAddContext } from './contexts/add-fee';

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
        <section className = 'add-fee'>
            {data && <ModalFee fee = {data} />}
            <IncomeFee />
        </section>
    )
}

export default AddFeePanel;