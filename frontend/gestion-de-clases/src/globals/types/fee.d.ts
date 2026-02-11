import type { PaymentLapse } from "./payment-lapse"



export type Fee = {
    id: number | undefined 
    amount: number 
    applicationDate : Date 
    paymentLapse : PaymentLapse
}