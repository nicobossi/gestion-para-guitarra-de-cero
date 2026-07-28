import { ApiError, CauseError } from "@/globals/api/api-error";
import api from "@/globals/api/api-client";
import { requestDto } from "../adapter/income-fee/request.dto";
import { URL_ADD_FEE } from "@/globals/api/api-urls";
import { responseDto, type FeeResponseDto } from "../adapter/income-fee/response.dto";
import type { Fee } from "../../../../../shared/domain/fee/fee";
import type { AddFee } from "../components/income-fee/components/fee-form/types/schema";

const saveFee = async (fee : AddFee) : Promise<Fee> => {

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