import usePaymentContext from '../../contexts/payment-validate';
import type { ModalPaymentProps } from './modal-payment';
import SuccessModal from '@/shared/components/success-modal/SuccessModal';
import './modal-payment.css';

const ModalPayment = ({payment} : ModalPaymentProps) => {

    const {freshData} = usePaymentContext();

    return (
        <section className = "modal-payment_container">
            <SuccessModal 
                data = {payment}
                title = 'Cuota ingresada'
                message = {`El pago de $${payment.amount} para el alumno ${payment.name} ${payment.surname } fue registrado exitosamente ¿Desea volver al home?`}
                close = {freshData}
            />
        </section>
    )
}

export default ModalPayment;