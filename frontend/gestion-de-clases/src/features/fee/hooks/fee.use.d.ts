import type { UseAddData } from "@/globals/types/add-data";
import type { Fee } from "@/globals/types/fee";
import type { ApiError } from "@/infraestructure/api/api-error";



export interface UseFee extends UseAddData<Fee> {
    data : Fee | null 
    error : ApiError | null 
    isLoading : boolean
    freshError : () => void
    freshData : () => void
    add : (fee : Fee) => void
}