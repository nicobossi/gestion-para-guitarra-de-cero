import { ApiError, CauseError } from "@/globals/api/api-error";
import api from "@/globals/api/api-client";
import { requestDto } from "../adapter/request.dto";
import { URL_ADD_FEE } from "@/globals/api/api-urls";
import { responseDto, type FeeResponseDto } from "../adapter/response.dto";
import type { Fee } from "../../../../../shared/domain/fee/fee";



const saveFee = async (fee : Fee) : Promise<Fee> => {

    try {
        const addedFee = await api.post<FeeResponseDto>(URL_ADD_FEE, requestDto(fee));
        return responseDto(addedFee.data);
    }
    catch(error : unknown) {
        if(error instanceof ApiError && error.getStatus === 409) {
            error.setCause(CauseError.RepeatAmount)
            return Promise.reject(error);
        }
        else throw error;
    }
}

export default saveFee;