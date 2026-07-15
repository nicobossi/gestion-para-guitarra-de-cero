import { CauseError } from "@/globals/api/api-error";
import RepeatAmountErrorContainer from "./components/repeat-amount-error-container/RepeatAmountErrorContainer";
import useFeeContext from "../../contexts/fee-validate";
import FeeForm from "./components/fee-form/FeeForm";



const IncomeFee = () => {

    const {error} = useFeeContext();

    const isError = () => error?.isCause(CauseError.RepeatAmount);

    return (
        isError() ? <RepeatAmountErrorContainer /> : <FeeForm />
    )
}

export default IncomeFee;