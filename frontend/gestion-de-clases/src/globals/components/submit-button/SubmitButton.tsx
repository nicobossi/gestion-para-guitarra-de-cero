import type { SubmitButtonProps } from './submit-button';
import './submit-button.css'


const SumbitButton = ({isLoading} : SubmitButtonProps) => {
    
    return (
        <button className = "submit-button">
            {isLoading ? <span className = 'load'></span> : <span>Ingresar</span>}
        </button>
    )
}

export default SumbitButton;