import type { PaymentLapse } from "@/main/shared/domain/types/payment-lapse"


export type FeeResponseDto = {
    id? : number
    amount : number,
    applicationDate : string,
    paymentLapse : PaymentLapse
}