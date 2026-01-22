import type { InputData } from "@/globals/types/input"


type FormContentProps = {
    inputsData : InputData[] 
    onSubmit : (student : unknown) => void
}