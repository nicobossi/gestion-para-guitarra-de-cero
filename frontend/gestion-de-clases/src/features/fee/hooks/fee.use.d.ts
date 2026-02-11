import type { UseAddData } from "@/globals/types/add-data";
import type { Fee } from "@/globals/types/fee";



export interface UseFee extends UseAddData<Fee> {
    data : Fee | null 
    error : ApiError | null 
    isLoading : boolean
    freshError : () => void
    add : (fee : Fee) => void
}