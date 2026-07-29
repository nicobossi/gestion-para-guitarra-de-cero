import { ModelCause } from "@/globals/api/types/cause";
import { useValidateAddContext } from "../../contexts/add-payment";
import PaymentForm from "./components/payment-form/PaymentForm";
import StudentWithSameNameContainer from "./components/student-with-same-name/StudentWithSameNameContainer";

const IncomePayment = () => {

    const { isLoading, error, freshData, add } = useValidateAddContext();

    const isError = () => error && error.isCause(ModelCause.StudentWithSameName);

    return (
        <>
            <PaymentForm isLoading = {isLoading} add = {add} />
            {isError() && <StudentWithSameNameContainer onFresh = {freshData} />}
        </>
    )
}

export default IncomePayment;