import { useValidateAddContext } from '../../../../context/add-student';
import './phone-error-container.css'
import ErrorContainer from '@/shared/components/error-container/ErrorContainer'


const PhoneErrorContainer = () => {

    const { freshError } = useValidateAddContext();

    return (
        <div className = 'phone-error-container'>
            <ErrorContainer 
                content = "El celular ya se encuentra agendado por otro estudiante"
                onSubmit = {freshError}
            />
        </div>
    )
}

export default PhoneErrorContainer;