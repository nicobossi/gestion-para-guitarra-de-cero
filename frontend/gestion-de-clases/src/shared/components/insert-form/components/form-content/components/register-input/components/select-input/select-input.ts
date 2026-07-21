import type { SelectInputData } from "@/shared/types/input"
import type { FieldError, FieldValues, UseFormRegister } from "react-hook-form"

export type RegisterSelectInputProps<T extends FieldValues> = {
    selectData : SelectInputData
    register: UseFormRegister<T>
    error: FieldError
}