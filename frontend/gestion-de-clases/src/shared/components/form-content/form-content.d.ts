import type { InputData } from "@/globals/types/input"
import type { ObjectSchema } from "yup"


type FormContentProps = {
    schema : ObjectSchema<T>
    inputsData : InputData[] 
    isLoading : boolean
    onSubmit : (data : T) => void
}