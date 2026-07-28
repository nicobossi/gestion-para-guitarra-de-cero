import { css } from '@styled-system/css';
import type { SubmitButtonProps } from './submit-button';
import './submit-button.css'

const SumbitButton = ({isLoading, styles} : SubmitButtonProps) => {
    
    return (
        <button className = {`submit-button ${css(styles)}`}>
            {isLoading ? <span className = 'load'></span> : <span>Ingresar</span>}
        </button>
    )
}

export default SumbitButton;