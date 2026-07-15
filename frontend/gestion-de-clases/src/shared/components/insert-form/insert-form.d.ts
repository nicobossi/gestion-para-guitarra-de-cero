import type { InputData } from "@/shared/types/input"

export type InsertFormProps<T> = {
    title: string 
    schema: ObjectSchema<T>
    inputsData: InputData[]
    isLoading: boolean 
    onSubmit: (data: T) => void
}