import './phone-error-container.css'
import useStudentContext from '../../context/useStudent-validate'
import ErrorContainer from '@/globals/components/error-container/ErrorContainer'


const PhoneErrorContainer = () => {

    const {freshError} = useStudentContext();

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