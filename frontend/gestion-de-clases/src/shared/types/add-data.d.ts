


export interface UseAddData<T> {
    data : T | null 
    error : ApiError | null 
    isLoading : boolean
    freshError : () => void
    add : (student : T) => void
}