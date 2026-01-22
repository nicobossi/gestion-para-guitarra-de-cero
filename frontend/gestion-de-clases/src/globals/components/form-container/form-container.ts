import type { InputData } from "@/globals/types/input"


export type FormContainerProps = {
    title : string
    inputsData : InputData[] 
    onSubmit : (student : unknown) => void
}