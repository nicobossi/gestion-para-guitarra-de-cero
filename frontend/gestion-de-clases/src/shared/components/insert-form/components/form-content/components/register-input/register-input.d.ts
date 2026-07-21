import type { InputData } from "@/shared/types/input"

export type RegisterInputProps = {
    inputData : InputData
    register: UseFormRegisterReturn<string>
    error: FieldError
}