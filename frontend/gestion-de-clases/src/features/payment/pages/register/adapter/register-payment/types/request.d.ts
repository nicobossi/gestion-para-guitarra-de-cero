import type { Payment } from "@/shared/domain/payment/payment"
import type { PaymentMethod } from "@/shared/domain/payment/payment-method"

export type PaymentRequest = Omit<Payment, | 'paymentDate' | 'id'> & {
    paymentDate: string
}
