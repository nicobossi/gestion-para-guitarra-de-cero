import type { Payment } from "@/shared/domain/payment/payment";

export type PaymentRequestDto = Omit<Payment, 'id'>

export const requestDto = (payment : Payment) : PaymentRequestDto => {
    
}