import { CauseError } from "@/infraestructure/api/api-error";
import useFeeContext from "../../contexts/fee-validate"
import RepeatAmountErrorContainer from "../repeat-amount-error-container/RepeatAmountErrorContainer";
import FeeForm from "../fee-form/FeeForm";



const IncomeFee = () => {

    const {error} = useFeeContext();

    const isError = () : boolean | undefined => error?.isCause(CauseError.RepeatAmount);

    return (
        <section>
            {isError() ? <RepeatAmountErrorContainer /> : <FeeForm />}
        </section>
    )
}

export default IncomeFee;