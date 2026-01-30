import type { InputData } from "@/globals/types/input"
import type { AnyObject, ObjectSchema } from "yup"


type FormContentProps = {
    schema : ObjectSchema<AnyObject>
    inputsData : InputData[] 
    onSubmit : (data : AnyObject) => void
}