import type { FieldValues, Path } from "react-hook-form";
import type { SimpleInputProps } from "./simple-input"

function SimpleInput<T extends FieldValues>({inputData, register, error} : SimpleInputProps<T>) {
    return (
        <input className = {error ? "register-input_error" : "register-input"}
            {...register(inputData.name as Path<T>)}
            id = {inputData.id}
            name = {inputData.name}
            type = {inputData.type}
            placeholder = {inputData.placeholder}
        >
        </input>
    )
}

export default SimpleInput;