import ModalHeader from '@/globals/components/modal-header/ModelHeader';
import type { ModalFeeProps } from './modal-fee-d';
import './modal-fee.css'
import ModalContent from '@/globals/components/modal-content/ModalContent';
import ModalFooter from '@/globals/components/modal-footer/ModalFooter';
import ModalContainer from '@/globals/components/modal-container/ModalContainer';
import useFeeContext from '../../contexts/fee-validate';


const ModalFee = ({fee} : ModalFeeProps) => {

    const {freshData} = useFeeContext();

    return (
        <section className = "modal-fee_container">
            <ModalContainer data = {fee}>
                <ModalHeader 
                    title = 'Cuota ingresada'
                    onSubmit = {freshData}
                    />
                <ModalContent 
                    content = {`La cuota con el monto de $${fee.amount} fue ingresada exitosamente ¿Desea volver al home?`} />
                <ModalFooter />
            </ModalContainer>
        </section>
    )
}

export default ModalFee;