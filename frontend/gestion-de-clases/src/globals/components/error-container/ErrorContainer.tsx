import GenericContainer from '../generic-container/GenericContainer';
import TitleContainer from '../title-container/TitleContainer';
import type { ErrorContainerProps } from './error-container'
import './error-container.css'

const ErrorContainer = ({content, onSubmit} : ErrorContainerProps) => {
    
    return (
        <GenericContainer>
            <TitleContainer title = "Ingreso Fallido" />
            <div className = 'error-content'>
                <p>{content}</p>
                <button type="button" onClick = {onSubmit}>Volver a intentar</button>
            </div>
        </GenericContainer>
    )
}

export default ErrorContainer;