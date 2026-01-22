import './submit-button.css'
import type { SubmitButtonProps } from './submit-button';


const SumbitButton = ({onSubmit} : SubmitButtonProps) => {
    return (
        <button className = "submit-button" onClick = {onSubmit}>Ingresar</button>
    )
}

export default SumbitButton;