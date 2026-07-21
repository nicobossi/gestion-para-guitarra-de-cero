import type { UseAddData } from "@/globals/types/add-data";
import type { ApiError } from "@/globals/api/api-error";
import type { Fee } from "@/shared/domain/fee/fee";

export interface UseFee extends UseAddData<Fee> {
    data : Fee | null 
    error : ApiError | null 
    isLoading : boolean
    freshError : () => void
    freshData : () => void
    add : (fee : Fee) => void
}