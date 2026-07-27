import { useValidateAddContext } from '../../contexts/add-fee';
import type { ModalFeeProps } from './modal-fee-d';
import './modal-fee.css'
import SuccessModal from '@/shared/components/success-modal/SuccessModal';


const ModalFee = ({fee} : ModalFeeProps) => {

    const {freshData} = useValidateAddContext();

    return (
        <section className = "modal-fee_container">
            <SuccessModal 
                data = {fee}
                title = 'Cuota ingresada'
                message = {`La cuota con el monto de $${fee.amount} fue ingresada exitosamente ¿Desea volver al home?`}
                close = {freshData}
            />
        </section>
    )
}

export default ModalFee;