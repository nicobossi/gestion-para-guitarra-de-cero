import SumbitButton from "../submit-button/SubmitButton";
import type { FormContentProps } from "./form-content";
import './form-content.css'
import RegisterInput from "../register-input/RegisterInput";
import { useForm, type FieldValues } from "react-hook-form";


function FormContent<T extends FieldValues>({inputsData, onSubmit} : FormContentProps<T>) {

    const {register, handleSubmit, formState: {errors}} = useForm<T>();

    const eventSubmit = (data : T) => onSubmit(data);

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