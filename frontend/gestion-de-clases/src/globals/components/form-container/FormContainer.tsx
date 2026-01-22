import RegisterInput from "../register-input/RegisterInput";
import type { FormContainerProps } from "./form-container";
import './form-container.css'

const FormContainer = ({inputsData, onSubmit} : FormContainerProps) => {

    return (
        <div className = "form-container">
            <form onSubmit={onSubmit /*(falta invocarlo)*/}>
            {inputsData.map(input => 
                <RegisterInput 
                    inputData = {input} 
                    key = {input.id} />
                )
            }
            </form>
        </div>
    )
}

export default FormContainer;