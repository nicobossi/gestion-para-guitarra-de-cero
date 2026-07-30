import type { ModalPaymentProps } from './modal-payment';
import SuccessModal from '@/shared/components/success-modal/SuccessModal';
import { useValidateAddContext } from '../../contexts/add-payment';
import { css } from '@styled-system/css';
import { token } from '@styled-system/tokens';

const ModalPayment = ({payment} : ModalPaymentProps) => {

    const {freshData} = useValidateAddContext();

    return (
        <SuccessModal 
            title = 'PAGO REGISTRADO'
            message = {`El pago de $${payment.amount} para el alumno ${payment.name} ${payment.surname } fue registrado exitosamente`}
            close = {freshData}
            bg = {css.raw({ bg: token("gradients.payment") })}
        />
    )
}

export default ModalPayment;