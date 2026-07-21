import PaymentForm from "./components/payment-form/PaymentForm";

const IncomePayment = () => {

    return <PaymentForm />

    /*const {error} = usePaymentContext();

    const isError = () => false

    return (
        isError() ? <RepeatAmountErrorContainer /> : <PaymentForm />
    )*/
}

export default IncomePayment;