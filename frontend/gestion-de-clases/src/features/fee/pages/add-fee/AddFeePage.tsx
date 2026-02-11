import SideBar from '@/globals/components/side-bar/SideBar';
import useFeeContext from '../../contexts/fee-validate';
import './add-fee-page.css'
import ModalFee from '../../components/modal-fee/ModalFee';


const AddFeePage = () => {

    const {data} = useFeeContext();

    return (
        <section>
            <SideBar />
            {data && <ModalFee fee = {data} />}
        </section>
    )
}

// <IncomeFee />


export default AddFeePage;