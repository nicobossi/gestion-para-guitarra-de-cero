import ErrorContainer from "@/shared/components/error-container/ErrorContainer";
import './repeat-amount-error-container.css'

type RepeatAmountErrorContainerProps = {
    onError: () => void
}

const RepeatAmountErrorContainer = ({onError}: RepeatAmountErrorContainerProps) => {

    return (
        <div className = 'repeat-amount-error-container'>
            <ErrorContainer 
                content = "El monto de la cuota ya se encuentra registrado"
                onSubmit = {onError}
            />
        </div>
    )
}

export default RepeatAmountErrorContainer;