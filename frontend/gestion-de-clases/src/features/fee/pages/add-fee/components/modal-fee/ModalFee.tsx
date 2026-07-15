import ModalHeader from '@/shared/components/modal-header/ModelHeader';
import type { ModalFeeProps } from './modal-fee-d';
import './modal-fee.css'
import ModalContent from '@/shared/components/modal-content/ModalContent';
import ModalFooter from '@/shared/components/modal-footer/ModalFooter';
import ModalContainer from '@/shared/components/modal-container/ModalContainer';
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