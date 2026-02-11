import type { UseAddData } from "@/globals/types/add-data"
import type { Student } from "@/globals/types/student"
import type { ApiError } from "@/infraestructure/api/api-error"


export interface UseStudent extends UseAddData<Student> {
    data : Student | null 
    error : ApiError | null 
    isLoading : boolean
    freshError : () => void
    freshData : () => void
    add : (student : Student) => void
}