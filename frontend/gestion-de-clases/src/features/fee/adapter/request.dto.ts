import type { Fee } from "@/globals/types/fee";
import { PaymentLapse } from "@/globals/types/payment-lapse";



export type FeeRequestDto = Omit<Fee, 'id' | 'applicationDate' | 'paymentLapse'> & {
    applicationDate : string
    paymentLapse : string
}

export const requestDto = (fee : Fee) : FeeRequestDto => {
    return {
        amount: Number.parseInt(fee.amount as unknown as string),
        applicationDate: fee.applicationDate.toString(),
        paymentLapse: toPaymentLapse(fee.paymentLapse)
    }
}


const toPaymentLapse = (value : string) : PaymentLapse => {
    if(value === "mensual") return PaymentLapse.MONTHLY
    else return PaymentLapse.BIWEEKLY
}