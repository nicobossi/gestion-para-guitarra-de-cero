import SumbitButton from "../submit-button/SubmitButton";
import type { FormContentProps } from "./form-content";
import './form-content.css'
import RegisterInput from "../register-input/RegisterInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { AnyObject } from "yup";


function FormContent<T extends AnyObject>({schema, inputsData, isLoading, onSubmit} : FormContentProps) {

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
            <SumbitButton isLoading = {isLoading}/> 
            </form>
        </div>
    )
}

export default FormContent;