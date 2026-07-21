import type { RegisterInputProps } from "./register-input";
import './register-input.css'
import SimpleInput from "./components/simple-input/SimpleInput";
import SelectInput from "./components/select-input/SelectInput";
import type { FieldValues } from "react-hook-form";

function RegisterInput<T extends FieldValues>({inputData, register, error} : RegisterInputProps<T>) {
    return (
        <div className="input-container">
            {<Input inputData = {inputData} register = {register} error = {error} />} 
            {error && <p className = "error-message">{error.message}</p>}
        </div>
    )
}

function Input<T extends FieldValues>({inputData, register, error} : RegisterInputProps<T>) {
    return (
        "elements" in inputData ? 
            <SelectInput selectData = {inputData} register = {register} error = {error} /> :
            <SimpleInput inputData = {inputData} register = {register} error = {error} /> 
    )
}

export default RegisterInput;