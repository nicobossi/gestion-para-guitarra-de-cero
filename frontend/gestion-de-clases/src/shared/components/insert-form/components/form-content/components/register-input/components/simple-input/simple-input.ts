import type { InputData } from "@/shared/types/input"
import type { FieldError, FieldValues, UseFormRegister } from "react-hook-form"

export type SimpleInputProps<T extends FieldValues> = {
    inputData : InputData
    register: UseFormRegister<T>
    error: FieldError
}