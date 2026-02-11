import type { FeeCreateInput } from "resources/generated/prisma/models";
import { Fee } from "../../domain/fee";
import type { FeePrisma } from "@/main/shared/infraestructure/persistence/sql/prisma/types";
import type { FeeRequestDto } from "./request.dto";
import type { FeeResponseDto } from "./response.dto";


export class FeeMapper {
    
    toSql(fee: Fee) : FeeCreateInput {
        return {
            amount: fee.getAmount,
            applicationDate: fee.getApplicationDate,
            paymentLapse: fee.getPaymentLapse
        }
    }
    
    toModel(addedFee : FeePrisma) : Fee {
        return new Fee(
            addedFee.amount,
            addedFee.paymentLapse,
            addedFee.applicationDate,
            addedFee.id
        )
    }

    dtoToModel(requestDto : FeeRequestDto) : Fee {
        return new Fee(
            requestDto.amount,
            requestDto.paymentLapse,
            new Date(requestDto.applicationDate)
        )
    }

    modelToDto(fee : Fee) : FeeResponseDto {
        return {
            id: fee.getId,
            amount: fee.getAmount,
            applicationDate: fee.getApplicationDate.toString(),
            paymentLapse: fee.getPaymentLapse
        }
    }
}