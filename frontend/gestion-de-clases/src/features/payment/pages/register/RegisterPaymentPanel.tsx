import IncomePayment from "./components/income-payment/IncomePayment";
import ModalPayment from "./components/modal-payment/ModalPayment";
import usePaymentContext from "./contexts/payment-validate";
import PaymentProvider from "./contexts/payment.provider";

const RegisterPaymentPanel = () => {

    return (
        <PaymentProvider>
            <RegisterPaymentPage />
        </PaymentProvider>
    )
}

const RegisterPaymentPage = () => {

    const {data} = usePaymentContext();

    return (
        <section className = 'register-payment'>
            {data && <ModalPayment payment = {data} />}
            <IncomePayment />
        </section>
    )
}

export default RegisterPaymentPanel;