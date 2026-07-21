import type { FieldValues, Path } from "react-hook-form";
import type { RegisterSelectInputProps } from "./select-input"

function SelectInput<T extends FieldValues>({selectData, register, error} : RegisterSelectInputProps<T>) {
    return (
        <select className = {error ? "register-input_error" : "register-input"}
            {...register(selectData.name as Path<T>)}
            id = {selectData.id}
            name = {selectData.name}
        >
            {selectData.elements.map(element => 
                <option 
                    value = {element.value} 
                    key = {element.value}>
                        {element.value}
                </option>
            )}
        </select>
    )
}

export default SelectInput;