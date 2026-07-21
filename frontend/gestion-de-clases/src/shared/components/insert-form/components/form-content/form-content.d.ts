import type { InputData } from "@/shared/types/input"
import type { ObjectSchema } from "yup"

export type FormContentProps = {
    schema : ObjectSchema<T>
    inputsData : InputData[] 
    isLoading : boolean
    onSubmit : (data : T) => void
}