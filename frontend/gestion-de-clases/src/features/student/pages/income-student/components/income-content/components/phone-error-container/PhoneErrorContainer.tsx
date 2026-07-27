import './phone-error-container.css'
import ErrorContainer from '@/shared/components/error-container/ErrorContainer'

type PhoneErrorContainerProps = {
    onFresh: () => void
}

const PhoneErrorContainer = ({onFresh}: PhoneErrorContainerProps) => {

    return (
        <div className = 'phone-error-container'>
            <ErrorContainer 
                content = "El celular ya se encuentra agendado por otro estudiante"
                onSubmit = {onFresh}
            />
        </div>
    )
}

export default PhoneErrorContainer;