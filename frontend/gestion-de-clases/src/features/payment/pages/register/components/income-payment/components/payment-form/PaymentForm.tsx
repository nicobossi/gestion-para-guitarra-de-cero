import inputsData from './types/inputs-data';
import InsertForm from '@/shared/components/insert-form/InsertForm';
import paymentSchema from './types/form-data';
import usePreparePaymentRecord from './hooks/use-prepare-payment-record';
import { formStyles } from './styles';
import type { RegisterPaymentSchema } from '../../../../adapter/register-payment/schema';

type PaymentFormProps = {
    isLoading: boolean 
    add: (payment: RegisterPaymentSchema) => void
}

const PaymentForm = ({isLoading, add}: PaymentFormProps) => {

    const {preparePaymentRecord} = usePreparePaymentRecord() 

    return (
        preparePaymentRecord && 
        <InsertForm 
            title = "Pago"
            schema = {paymentSchema}
            inputsData = {inputsData(preparePaymentRecord)}
            isLoading = {isLoading}
            onSubmit = {add}
            styles = {formStyles}
        />
    )
}

export default PaymentForm;