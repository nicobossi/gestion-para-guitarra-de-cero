import type { TextPaymentMethod } from "./schema";
import { PaymentMethod } from "@/shared/domain/payment/payment-method";
import type { PaymentRequest } from "./types/request";
import adapteCompleteName from "@/features/payment/adapters/student-full-name/request";
import type { Payment } from "@/shared/domain/payment/payment";

export function adapteRegistePaymentRequest(payment: Payment): PaymentRequest {
    const {firstName, secondName, surname} = adapteCompleteName(payment.completeName);
    
    return {
        name: firstName,
        surname: surname,
        secondName: secondName ? secondName : undefined,
        paymentMethod: adaptePaymentMethod(payment.paymentMethod),
        paymentDate: payment.paymentDate,
        amount: Number.parseInt(payment.amount)
    }
}

function adaptePaymentMethod(paymentMethod: TextPaymentMethod) {
    return paymentMethod === 'efectivo' ? PaymentMethod.CASH : PaymentMethod.MERCADO_PAGO
}


