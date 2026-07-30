import type { ApiError } from "../../globals/api/errors/api-error"

export interface UseAddData<T extends object, K> {
    data : T | null 
    error : ApiError | null 
    isLoading : boolean
    freshData : () => void
    add : (data : K) => void
}