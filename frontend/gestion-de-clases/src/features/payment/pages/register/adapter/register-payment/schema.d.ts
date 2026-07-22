import type { PaymentMethod } from "@/shared/domain/payment/payment-method"
import type { PaymentRequestDto } from "./request.dto"

export type RegisterPaymentSchema = {
    amount: string
    completeName: string
    paymentMethod: TextPaymentMethod
    paymentDate: string
}

export type TextPaymentMethod = "mercado pago" | "efectivo"