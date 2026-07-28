import type { InputData } from "@/shared/types/input"
import type { SystemStyleObject } from "@styled-system/types"

export type InsertFormProps<T> = {
    title: string 
    schema: ObjectSchema<T>
    inputsData: InputData[]
    isLoading: boolean 
    onSubmit: (data: T) => void
    styles: SystemStyleObject
}