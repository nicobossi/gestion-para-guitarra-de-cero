import type { FeeCreateInput } from "resources/generated/prisma/models";
import { Fee } from "../../domain/fee";
import type { FeePrisma } from "@/main/shared/infraestructure/persistence/sql/prisma/types";


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
}