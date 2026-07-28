import './phone-error-container.css'
import ErrorToast from '@/shared/components/error-container/ErrorContainer'

type PhoneErrorContainerProps = {
    onFresh: () => void
}

const PhoneErrorMessage = ({onFresh}: PhoneErrorContainerProps) => {

    return (
        <div className = 'phone-error-container'>
            <ErrorToast 
                content = "El celular ya se encuentra agendado por otro estudiante"
                onSubmit = {onFresh}
            />
        </div>
    )
}

export default PhoneErrorMessage;