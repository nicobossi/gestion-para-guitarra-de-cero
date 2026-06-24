import { Payment } from '../../features/payment/domain/payment';

export interface CreatePayment {
    save(payment: Payment, idStudent: number, idFee: number): Promise<Payment>;
}

export const CREATED_PAYMENT = 'CREATED_PAYMENT';
