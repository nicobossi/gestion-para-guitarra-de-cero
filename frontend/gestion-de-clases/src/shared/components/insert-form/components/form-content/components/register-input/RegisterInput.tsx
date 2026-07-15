import type { RegisterInputProps } from "./register-input";
import './register-input.css'

const RegisterInput = ({inputData, register, error} : RegisterInputProps) => {
    return (
        <div className="input-container">
            <input className = {error ? "register-input_error" : "register-input"}
                {...register(inputData.name)}
                id = {inputData.id}
                name = {inputData.name}
                type = {inputData.type}
                placeholder = {inputData.placeholder}
            >
            </input>
            {error && <p className = "error-message">{error.message}</p>}
        </div>
    )
}

export default RegisterInput;