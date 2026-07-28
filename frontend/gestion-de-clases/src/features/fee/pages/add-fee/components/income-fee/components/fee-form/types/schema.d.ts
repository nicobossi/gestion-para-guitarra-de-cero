import type { FeeRequestDto } from "../../../../../adapter/income-fee/request.dto"

export type AddFee = Omit<FeeRequestDto, 'amount' | 'paymentLapse' | 'applicationDate'> & {
    amount : string 
    paymentLapse : string
    applicationDate : string
}