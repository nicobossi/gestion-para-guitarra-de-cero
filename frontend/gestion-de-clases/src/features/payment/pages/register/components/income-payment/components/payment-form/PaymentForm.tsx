import inputsData from './inputs-data';
import InsertForm from '@/shared/components/insert-form/InsertForm';
import usePaymentContext from '../../../../contexts/payment-validate';
import paymentSchema from './form-data';
import './payment-form.css'

const PaymentForm = () => {

    const {isLoading, add} = usePaymentContext();

    return (
        <section className = "payment-add_form-container">
            <InsertForm 
                title = "Pago"
                schema = {paymentSchema}
                inputsData = {inputsData}
                isLoading = {isLoading}
                onSubmit = {add}
            />
        </section>
    )
}

export default PaymentForm;