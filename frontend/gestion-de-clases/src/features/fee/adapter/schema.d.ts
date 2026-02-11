import type { FeeRequestDto } from "./request.dto"



export type FeeSchema = Omit<FeeRequestDto, 'amount' | 'paymentLapse' | 'applicationDate'> & {
    amount : string 
    paymentLapse : string
    applicationDate : string
}