import { PaymentMethod } from '../../../domain/payment-method';

export interface CreatePaymentResponse {
    id: number;
    amount: number;
    name: string;
    surname: string;
    secondName?: string;
    paymentDate: Date;
    nextPaymentDate: Date;
    paymentMethod: PaymentMethod;
}
