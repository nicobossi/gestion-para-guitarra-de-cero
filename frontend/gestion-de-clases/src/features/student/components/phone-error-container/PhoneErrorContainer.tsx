import GenericContainer from '@/globals/components/generic-container/GenericContainer'
import './phone-error-container.css'
import TitleContainer from '@/globals/components/title-container/TitleContainer'
import useStudentContext from '../../context/useStudent-validate'


const PhoneErrorContainer = () => {

    const {freshError} = useStudentContext();

    return (
        <div className = 'phone-error-container'>
            <GenericContainer>
                <TitleContainer title = "Ingreso Fallido" />
                <div className = 'phone-error-content'>
                    <p>El celular ya se encuentra agendado por otro estudiante</p>
                    <button type="button" onClick = {freshError}>Volver a intentar</button>
                </div>
            </GenericContainer>
        </div>
    )
}

export default PhoneErrorContainer;