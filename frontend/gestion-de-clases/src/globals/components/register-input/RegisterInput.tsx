import type { RegisterInputProps } from "./register-input";
import './register-input.css'

const RegisterInput = ({inputData} : RegisterInputProps) => {
    return (
        <input className = 'register-input'
            id = {inputData.id}
            name = {inputData.name}
            type = {inputData.type}
            placeholder = {inputData.placeholder}
            required = {inputData.isRequired} 
        >
        </input>
    )
}

export default RegisterInput;