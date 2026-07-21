import type { PaymentLapse } from "./payment-lapse"

export interface Fee {
    id?: number 
    amount: number 
    applicationDate : Date 
    paymentLapse : PaymentLapse
}