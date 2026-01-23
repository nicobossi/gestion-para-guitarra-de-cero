import { useForm } from "react-hook-form";
import SumbitButton from "../submit-button/SubmitButton";
import type { FormContentProps } from "./form-content";
import './form-content.css'
import RegisterInput from "../register-input/RegisterInput";


const FormContent = ({inputsData, onSubmit} : FormContentProps) => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const eventSubmit = (data : unknown) => onSubmit(data);

    return (
        <div className = "form-content">
            <form onSubmit = {handleSubmit(eventSubmit)}>
            {inputsData.map(input => 
                <RegisterInput 
                    key = {input.id}
                    inputData = {input}
                    register = {register}
                    error = {errors[input.name]}
                    />
                )}
                <SumbitButton /> 
            </form>
        </div>
    )
}

export default FormContent;