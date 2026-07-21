import type { PaymentMethod } from "./payment-method"

export interface Payment {
    id?: number 
    name: string,
    surname: string,
    secondName?: string,
    paymentMethod: PaymentMethod
    paymentDate: Date
    amount: number
}