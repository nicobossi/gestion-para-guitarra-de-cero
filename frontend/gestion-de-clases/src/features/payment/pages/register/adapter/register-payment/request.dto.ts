import type { RegisterPaymentSchema, TextPaymentMethod } from "./schema";
import { PaymentMethod } from "@/shared/domain/payment/payment-method";
import adapteCompleteName from "@/features/payment/adapters/student-full-name/request";
import type { Payment } from "@/shared/domain/payment/payment";
import type { PaymentRequest } from "./types/request";

export function adaptePaymentRequest(payment: Payment): PaymentRequest {
    return {
        paymentDate: payment.paymentDate.toString(),
        name: payment.name,
        surname: payment.surname,
        paymentMethod: payment.paymentMethod,
        secondName: payment.secondName,
        amount: payment.amount
    }
}

export function adapteRegistePaymentRequest(payment: RegisterPaymentSchema): Payment {
    const {firstName, secondName, surname} = adapteCompleteName(payment.completeName);
    return {
        name: firstName,
        surname: surname,
        secondName: secondName ? secondName : undefined,
        paymentMethod: adaptePaymentMethod(payment.paymentMethod),
        paymentDate: new Date(payment.paymentDate),
        amount: Number.parseInt(payment.amount)
    }
}

function adaptePaymentMethod(paymentMethod: TextPaymentMethod) {
    return paymentMethod === 'efectivo' ? PaymentMethod.CASH : PaymentMethod.MERCADO_PAGO
}


