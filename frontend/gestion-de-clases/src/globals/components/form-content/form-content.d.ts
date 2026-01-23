import type { InputData } from "@/globals/types/input"


type FormContentProps<T> = {
    inputsData : InputData[] 
    onSubmit : (data : T) => void
}