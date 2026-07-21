import inputsData from './inputs-data';
import InsertForm from '@/shared/components/insert-form/InsertForm';
import usePaymentContext from '../../../../contexts/payment-validate';
import paymentSchema from './form-data';
import './payment-form.css'
import useFeePrices from '../../../../../../hooks/useFeePrices';
import useCompleteName from '@/features/payment/hooks/useCompleteName';

const PaymentForm = () => {

    const {isLoading, add} = usePaymentContext();
    const {prices} = useFeePrices();
    const {fullNames} = useCompleteName();

    return (
        <section className = "payment-add_form-container">
            <InsertForm 
                title = "Pago"
                schema = {paymentSchema}
                inputsData = {inputsData({fullNames, prices})}
                isLoading = {isLoading}
                onSubmit = {add}
            />
        </section>
    )
}

export default PaymentForm;