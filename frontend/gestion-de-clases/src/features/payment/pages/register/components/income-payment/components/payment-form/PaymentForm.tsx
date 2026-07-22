import inputsData from './inputs-data';
import InsertForm from '@/shared/components/insert-form/InsertForm';
import usePaymentContext from '../../../../contexts/payment-validate';
import paymentSchema from './form-data';
import './payment-form.css'
import usePreparePaymentRecord from './hooks/use-prepare-payment-record';

const PaymentForm = () => {

    const {isLoading, add} = usePaymentContext();
    const {preparePaymentRecord} = usePreparePaymentRecord() 

    return (preparePaymentRecord && 
        <section className = "payment-add_form-container">
            <InsertForm 
                title = "Pago"
                schema = {paymentSchema}
                inputsData = {inputsData(preparePaymentRecord)}
                isLoading = {isLoading}
                onSubmit = {add}
            />
        </section>
    )
}

export default PaymentForm;