import { useValidateAddContext } from "../../contexts/add-payment";
import PaymentForm from "./components/payment-form/PaymentForm";

const IncomePayment = () => {

    const { isLoading, add } = useValidateAddContext();

    return <PaymentForm isLoading = {isLoading} add = {add} />

    /*const {error} = usePaymentContext();

    const isError = () => false

    return (
        isError() ? <RepeatAmountErrorContainer /> : <PaymentForm />
    )*/
}

export default IncomePayment;