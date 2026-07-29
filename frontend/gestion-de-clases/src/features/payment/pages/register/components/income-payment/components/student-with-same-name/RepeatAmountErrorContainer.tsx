import ErrorToast from "@/shared/components/error-container/ErrorContainer";
import './repeat-amount-error-container.css'

type RepeatAmountErrorContainerProps = {
    onFresh: () => void
}

const RepeatAmountErrorContainer = ({onFresh}: RepeatAmountErrorContainerProps) => {

    return (
        <div className = 'repeat-amount-error-container'>
            <ErrorToast 
                content = "El monto de la cuota ya se encuentra registrado"
                onSubmit = {onFresh}
            />
        </div>
    )
}

export default RepeatAmountErrorContainer;