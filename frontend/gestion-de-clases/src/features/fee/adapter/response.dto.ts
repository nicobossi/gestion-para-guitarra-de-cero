import type { Fee } from "@/shared/types/fee"
import { PaymentLapse } from "@/shared/types/payment-lapse"



export type FeeResponseDto = Omit<Fee, 'applicationDate' | 'paymentLapse'> & {
    applicationDate : Date
    paymentLapse : PaymentLapse
}

export const responseDto = ( responseDto : FeeResponseDto) : Fee => {
    return {
        id: responseDto.id,
        amount: responseDto.amount,
        applicationDate: new Date(responseDto.applicationDate),
        paymentLapse: PaymentLapse[responseDto.paymentLapse]
    }
}
