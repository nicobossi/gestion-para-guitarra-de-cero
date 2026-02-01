import type { Student } from "@/globals/types/student"
import type { ApiError } from "@/infraestructure/api/api-error"



export interface UseStudentType {
    student : Student | null 
    error : ApiError | null 
    isLoading : boolean
    freshError : () => void
    income : (student : Student) => void
}