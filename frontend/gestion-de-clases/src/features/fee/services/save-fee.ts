import type { Fee } from "@/globals/types/fee";
import { ApiError, CauseError } from "@/infraestructure/api/api-error";
import api from "@/infraestructure/request-config/request-config";
import { requestDto } from "../adapter/request.dto";
import { URL_ADD_FEE } from "@/infraestructure/api/api-urls";
import { responseDto, type FeeResponseDto } from "../adapter/response.dto";



const saveFee = async (fee : Fee) : Promise<Fee> => {

    try {
        const addedFee = await api.post<FeeResponseDto>(URL_ADD_FEE, requestDto(fee));
        return responseDto(addedFee.data);
    }
    catch(error : unknown) {
        if(error instanceof ApiError && error.getStatus === 409) 
            return Promise.reject(new ApiError(error.getStatus, error.getMessage, CauseError.RepeatAmount));
        else throw error;
    }
}

export default saveFee;