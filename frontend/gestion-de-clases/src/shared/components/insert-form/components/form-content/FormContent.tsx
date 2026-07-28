import type { FormContentProps } from "./form-content";
import './form-content.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { AnyObject } from "yup";
import RegisterInput from "./components/register-input/RegisterInput";
import SumbitButton from "./components/submit-button/SubmitButton";


function FormContent<T extends AnyObject>({schema, inputsData, isLoading, styles, onSubmit} : FormContentProps) {

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});

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
            <SumbitButton 
                isLoading = {isLoading} 
                styles = {styles} 
            /> 
            </form>
        </div>
    )
}

export default FormContent;