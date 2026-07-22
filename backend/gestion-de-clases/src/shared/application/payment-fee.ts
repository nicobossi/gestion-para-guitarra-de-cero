import { Fee } from '../../features/fee/domain/fee';
import { Price } from '../domain/entities/price';

export interface PaymentFee {
    getWithAmount(amount: number): Promise<Fee>;
    getAmounts(): Promise<Price[]>;
}

export const PAYMENT_FEE = 'PAYMENT_FEE';
