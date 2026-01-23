import type { FormContainerProps } from './form-container';
import './form-container.css'

const FormContainer = ({children} : FormContainerProps) => {

    return (
        <div className = "form-container">
            {children}
        </div>
    )
}


export default FormContainer;