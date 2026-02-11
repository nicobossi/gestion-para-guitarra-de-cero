import ModalHeader from '@/globals/components/modal-header/ModelHeader';
import type { ModalFeeProps } from './modal-fee-d';
import './modal-fee.css'
import ModalContent from '@/globals/components/modal-content/ModalContent';
import ModalFooter from '@/globals/components/modal-footer/ModalFooter';


const ModalFee = ({fee} : ModalFeeProps) => {

    return (
        <section className = "modal-fee_container">
            <div className = {fee ? "modal-container_active" : "modal-container_disable"}>
                <ModalHeader 
                    title = 'Cuota ingresada'/>
                <ModalContent 
                    content = {`$La cuota con el monto de ${fee.amount} fue ingresada exitosamente, ¿Desea volver al home?`} />
                <ModalFooter />
            </div>
        </section>
    )
}

export default ModalFee;