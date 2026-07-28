import type { InputData } from "@/shared/types/input"
import type { SystemStyleObject } from "@styled-system/types"
import type { ObjectSchema } from "yup"

export type FormContentProps = {
    schema : ObjectSchema<T>
    inputsData : InputData[] 
    isLoading : boolean
    styles: SystemStyleObject
    onSubmit : (data : T) => void
}