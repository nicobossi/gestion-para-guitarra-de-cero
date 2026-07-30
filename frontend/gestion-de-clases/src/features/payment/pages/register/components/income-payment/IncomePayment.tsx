import { ModelCause } from "@/globals/api/types/cause";
import { useValidateAddContext } from "../../contexts/add-payment";
import PaymentForm from "./components/payment-form/PaymentForm";
import StudentWithSameNameContainer from "./components/student-with-same-name/StudentWithSameNameContainer";
import ReintentIncomePayment from "../reintent-income-payment/ReinentIncomePayment";

const IncomePayment = () => {

    const { isLoading, error, add } = useValidateAddContext();

    const isError = () => error && error.isCause(ModelCause.StudentWithSameName);

    return (
        <>
            {isError() ? 
                <ReintentIncomePayment isLoading = {isLoading} add = {add} /> : 
                <PaymentForm isLoading = {isLoading} add = {add} />}
            {isError() && <StudentWithSameNameContainer />}
        </>
    )
}

export default IncomePayment;