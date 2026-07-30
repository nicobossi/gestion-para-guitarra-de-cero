import AddPanelContainer from "@/shared/components/add-panel-container/AddPanelContainer";
import IncomePayment from "./components/income-payment/IncomePayment";
import ModalPayment from "./components/modal-payment/ModalPayment";
import { AddPaymentProvider, useValidateAddContext } from "./contexts/add-payment";
import registerPayment from "./services/renew-payment";

const RegisterPaymentPanel = () => {
    return (
        <AddPaymentProvider income = {registerPayment}>
            <RegisterPaymentPage />
        </AddPaymentProvider>
    )
}

const RegisterPaymentPage = () => {

    const { data } = useValidateAddContext();

    return (
        <AddPanelContainer>
            {data && <ModalPayment payment = {data} />}
            <IncomePayment />
        </AddPanelContainer>
    )
}

export default RegisterPaymentPanel;