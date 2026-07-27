import ErrorContainer from "@/shared/components/error-container/ErrorContainer";
import './repeat-amount-error-container.css'
import { useValidateAddContext } from "../../../../contexts/add-fee";

const RepeatAmountErrorContainer = () => {

    const {freshError} = useValidateAddContext();

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