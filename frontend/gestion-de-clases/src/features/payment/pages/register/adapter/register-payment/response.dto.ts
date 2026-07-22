import type { Payment } from "@/shared/domain/payment/payment";
import type { PaymentRequest } from "./types/request";

export function adapteRegisterPaymentRespone(request: PaymentRequest): Payment {
    return {
        id: request.id,
        name: request.name,
        surname: request.surname,
        secondName: request.secondName,
        amount: request.amount,
        paymentDate: new Date(request.paymentDate),
        paymentMethod: request.paymentMethod
    }
}