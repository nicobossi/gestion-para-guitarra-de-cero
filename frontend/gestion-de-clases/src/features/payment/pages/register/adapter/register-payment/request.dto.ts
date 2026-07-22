import type { RegisterPaymentSchema, TextPaymentMethod } from "./schema";
import { PaymentMethod } from "@/shared/domain/payment/payment-method";
import type { PaymentRequest } from "./types/request";

export function adapteRegistePaymentRequest(payment: RegisterPaymentSchema): PaymentRequest {
    return {
        name: payment.completeName,
        surname: payment.completeName,
        secondName: payment.completeName,
        paymentMethod: adaptePaymentMethod(payment.paymentMethod),
        paymentDate: payment.paymentDate,
        amount: Number.parseInt(payment.amount)
    }
}

function adaptePaymentMethod(paymentMethod: TextPaymentMethod) {
    return paymentMethod === 'efectivo' ? PaymentMethod.CASH : PaymentMethod.MERCADO_PAGO
}

