import type { Fee } from "../../../../../../shared/domain/fee/fee";
import { PaymentLapse } from "../../../../../../shared/domain/fee/payment-lapse";
import type { AddFee } from "../../components/income-fee/components/fee-form/types/schema";

export type FeeRequestDto = Omit<Fee, 'id' | 'applicationDate' | 'paymentLapse'> & {
    applicationDate : string
    paymentLapse : string
}

export const requestDto = (fee : AddFee) : FeeRequestDto => {
    return {
        amount: Number.parseInt(fee.amount),
        applicationDate: fee.applicationDate,
        paymentLapse: toPaymentLapse(fee.paymentLapse)
    }
}


const toPaymentLapse = (value : string) : PaymentLapse => {
    if(value === "mensual") return PaymentLapse.MONTHLY
    else return PaymentLapse.BIWEEKLY
}