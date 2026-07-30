import { ModelCause } from "@/globals/api/types/cause";
import { useValidateAddContext } from "../../contexts/add-payment";
import PaymentForm from "./components/payment-form/PaymentForm";
import StudentWithSameNameContainer from "./components/student-with-same-name/StudentWithSameNameContainer";
import ReintentIncomePayment from "../reintent-income-payment/ReinentIncomePayment";
import type { RegisterPaymentSchema } from "../../adapter/register-payment/schema";
import { useState } from "react";

const IncomePayment = () => {

    const { isLoading, error, add } = useValidateAddContext();
    const [schema, setSchema] = useState<RegisterPaymentSchema>();

    const isError = error && error.isCause(ModelCause.StudentWithSameName);

    function handleAdd(paymentSchema: RegisterPaymentSchema) {
        setSchema(paymentSchema);
        add(paymentSchema);
    }

    return (
        <>
            {schema && isError ? 
                <ReintentIncomePayment isLoading = {isLoading} add = {add} schema = {schema} /> : 
                <PaymentForm isLoading = {isLoading} add = {handleAdd} />}
            {isError && <StudentWithSameNameContainer />}
        </>
    )
}

export default IncomePayment;