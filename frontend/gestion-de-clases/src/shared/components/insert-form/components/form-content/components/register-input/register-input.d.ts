import type { InputData } from "@/globals/types/input"


export type RegisterInputProps = {
    inputData : InputData
    register: UseFormRegisterReturn<string>
    error: FieldError
}