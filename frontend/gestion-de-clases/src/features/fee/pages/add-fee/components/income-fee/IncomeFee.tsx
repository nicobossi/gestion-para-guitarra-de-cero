import { CauseError } from "@/globals/api/api-error";
import RepeatAmountErrorContainer from "./components/repeat-amount-error-container/RepeatAmountErrorContainer";
import FeeForm from "./components/fee-form/FeeForm";
import { useValidateAddContext } from "../../contexts/add-fee";

const IncomeFee = () => {

    const { error, freshError, isLoading, add } = useValidateAddContext();

    const isError = () => error?.isCause(CauseError.RepeatAmount);

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