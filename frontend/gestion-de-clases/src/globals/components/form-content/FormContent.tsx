import RegisterInput from "../register-input/RegisterInput";
import SumbitButton from "../submit-button/SubmitButton";
import type { FormContentProps } from "./form-content";
import './form-content.css'

const FormContent = ({inputsData, onSubmit} : FormContentProps) => {

    return (
        <div className = "form-content">
            <form onSubmit={onSubmit /*(falta invocarlo)*/}>
            {inputsData.map(input => 
                <RegisterInput 
                    inputData = {input} 
                    key = {input.id} />
                )
            }
            <SumbitButton onSubmit={onSubmit} /> 
            </form>
        </div>
    )
}

export default FormContent;