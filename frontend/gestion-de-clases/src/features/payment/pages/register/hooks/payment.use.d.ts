import type { UseAddData } from "@/globals/types/add-data";
import type { Fee } from "@/globals/types/fee";
import type { ApiError } from "@/globals/api/api-error";
import type { Payment } from "@/shared/domain/payment/payment";

export interface UsePayment extends UseAddData<Payment> {
    data : Payment | null 
    error : ApiError | null 
    isLoading : boolean
    freshError : () => void
    freshData : () => void
    add : (fee : Payment) => void
}