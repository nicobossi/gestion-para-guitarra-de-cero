import SideBar from '@/globals/components/side-bar/SideBar';
import useFeeContext from '../../contexts/fee-validate';
import './add-fee-page.css';
import ModalFee from '../../components/modal-fee/ModalFee';
import IncomeFee from '../../components/income-fee/IncomeFee';

const AddFeePage = () => {

    const {data} = useFeeContext();

    return (
        <section className = 'add-fee'>
            <SideBar />
            {data && <ModalFee fee = {data} />}
            <IncomeFee />
        </section>
    )
}

export default AddFeePage;