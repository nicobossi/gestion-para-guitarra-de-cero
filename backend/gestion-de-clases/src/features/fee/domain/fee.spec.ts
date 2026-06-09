import { Fee } from './fee';
import { PaymentLapse } from './payment-lapse';

describe('Fee', () => {
    let fee: Fee;
    let applicationDate: Date;

    beforeEach(() => {
        applicationDate = new Date();
        fee = new Fee(500, PaymentLapse.MONTHLY, applicationDate);
    });

    it('should have an amount', () => {
        expect(fee.getAmount).toBe(500);
    });

    it('should have a Payment Lapse', () => {
        expect(fee.getPaymentLapse).toBe(PaymentLapse.MONTHLY);
    });

    it('should have a application date', () => {
        expect(fee.getApplicationDate).toBe(applicationDate);
    });

    it('should not have an id initially', () => {
        expect(fee.getId).toBeUndefined();
    });
});
