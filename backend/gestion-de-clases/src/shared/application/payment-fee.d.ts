import { Fee } from '../../features/fee/domain/fee';

export interface PaymentFee {
    getWithAmount(amount: number): Promise<Fee>;
}
