import { PaymentLapse } from '../../../../domain/payment-lapse';

export interface FeeResponse {
    id: number;
    amount: number;
    applicationDate: Date;
    paymentLapse: PaymentLapse;
}
