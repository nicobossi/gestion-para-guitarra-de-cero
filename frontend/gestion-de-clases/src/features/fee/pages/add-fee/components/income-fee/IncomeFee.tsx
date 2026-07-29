import RepeatAmountErrorContainer from "./components/repeat-amount-error-container/RepeatAmountErrorContainer";
import FeeForm from "./components/fee-form/FeeForm";
import { useValidateAddContext } from "../../contexts/add-fee";
import { ModelCause } from "@/globals/api/types/cause";

const IncomeFee = () => {

    const { error, freshError, isLoading, add } = useValidateAddContext();

    const isError = () => error?.isCause(ModelCause.RepeatAmount);

    return (
        isError() ? 
            <RepeatAmountErrorContainer onError = {freshError} /> : 
            <FeeForm 
                add = {add} 
                isLoading = {isLoading} 
            />
    )
}

export default IncomeFee;