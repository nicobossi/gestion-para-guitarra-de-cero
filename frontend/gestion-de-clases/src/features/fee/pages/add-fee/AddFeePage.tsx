import './add-fee-page.css';
import ModalFee from './components/modal-fee/ModalFee';
import IncomeFee from './components/income-fee/IncomeFee';
import useFeeContext from './contexts/fee-validate';
import FeeProvider from './contexts/fee.provider';

const AddFeePanel = () => {

    return (
        <FeeProvider>
            <AddFeePage />
        </FeeProvider>
    )
}

const AddFeePage = () => {

    const {data} = useFeeContext();

    return (
        <section className = 'add-fee'>
            {data && <ModalFee fee = {data} />}
            <IncomeFee />
        </section>
    )
}

export default AddFeePanel;