import type { UseAddData } from "@/globals/types/add-data"
import type { ApiError } from "@/globals/api/api-error"
import type { Student } from "@/shared/domain/student/student"
export interface UseStudent extends UseAddData<Student> {
    data : Student | null 
    error : ApiError | null 
    isLoading : boolean
    freshError : () => void
    freshData : () => void
    add : (student : Student) => void
}