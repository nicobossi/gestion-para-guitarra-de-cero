import type { InputData } from "@/globals/types/input"


type FormContainerProps = {
    inputsData : InputData[] 
    onSubmit : (student : unknown) => void
}