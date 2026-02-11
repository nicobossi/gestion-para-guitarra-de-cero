import ErrorContainer from "@/globals/components/error-container/ErrorContainer";
import './repeat-amount-error-container.css'
import useFeeContext from "../../contexts/fee-validate";

const RepeatAmountErrorContainer = () => {

    const {freshError} = useFeeContext();

    return (
        <div className = 'repeat-amount-error-container'>
            <ErrorContainer 
                content = "El monto de la cuota ya se encuentra registrado"
                onSubmit = {freshError}
            />
        </div>
    )
}

export default RepeatAmountErrorContainer;