import type { FieldError } from "react-hook-form";
import type { RegisterInputProps } from "./register-input";
import './register-input.css'
import type { SelectInputData } from "@/shared/types/input";

const RegisterInput = ({inputData, register, error} : RegisterInputProps) => {
    return (
        <div className="input-container">
            {<Input inputData = {inputData} register = {register} error = {error} />} 
            {error && <p className = "error-message">{error.message}</p>}
        </div>
    )
}

const Input = ({inputData, register, error} : RegisterInputProps) => {
    return (
        "elements" in inputData ? 
            <SelectInput selectData = {inputData} register = {register} error = {error} /> :
            <SimpleInput inputData = {inputData} register = {register} error = {error} /> 
    )
}

const SimpleInput = ({inputData, register, error} : RegisterInputProps) => {
    return (
        <input className = {error ? "register-input_error" : "register-input"}
            {...register(inputData.name)}
            id = {inputData.id}
            name = {inputData.name}
            type = {inputData.type}
            placeholder = {inputData.placeholder}
        >
        </input>
    )
}

type RegisterSelectInputProps = {
    selectData : SelectInputData
    register: UseFormRegisterReturn<string>
    error: FieldError
}

const SelectInput = ({selectData, register, error} : RegisterSelectInputProps) => {
    return (
        <select className = {error ? "register-input_error" : "register-input"}
            {...register(selectData.name)}
            id = {selectData.id}
            name = {selectData.name}
            type = {selectData.type}
            placeholder = {selectData.placeholder}
        >
            {selectData.elements.map(element => 
                <option value = {element.value} key = {element.value}>{element.value}</option>
            )}
        </select>
    )
}

export default RegisterInput;