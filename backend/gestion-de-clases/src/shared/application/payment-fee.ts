import { Fee } from '../../features/fee/domain/fee';

export interface PaymentFee {
    getWithAmount(amount: number): Promise<Fee>;
}

export const PAYMENT_FEE = 'PAYMENT_FEE';
