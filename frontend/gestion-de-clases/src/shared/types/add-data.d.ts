import type { ApiError } from "@/globals/api/api-error"

export interface UseAddData<T extends object> {
    data : T | null 
    error : ApiError | null 
    isLoading : boolean
    freshError : () => void
    freshData : () => void
    add : (data : T) => void
}