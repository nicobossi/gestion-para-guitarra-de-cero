import { Payment } from './payment';
import { PaymentMethod } from './payment-method';

describe('Unit Payment', () => {
    let payment: Payment;
    let paymentDate: Date;

    beforeEach(() => {
        paymentDate = new Date(2026, 11, 5);
        payment = new Payment(
            paymentDate,
            PaymentMethod.CASH,
            'Nicolás',
            'Bossi',
            1000,
            'Fernando',
        );
    });

    test('should have a date', () => {
        expect(payment.getPaymentDate).toBe(paymentDate);
    });

    test('should have a amount', () => {
        expect(payment.getAmount).toBe(1000);
    });

    test('should have a name the student', () => {
        expect(payment.getName).toBe('Nicolás');
        expect(payment.getSecondName).toBe('Fernando');
        expect(payment.getSurname).toBe('Bossi');
    });

    test('should have a payment method', () => {
        expect(payment.getPaymentMethod).toBe(PaymentMethod.CASH);
    });

    test('should calculate the next payment date in 29 days', () => {
        const nextDate = new Date(paymentDate);
        nextDate.setDate(paymentDate.getDate() + 28);
        expect(payment.getNextPaymentDate.getDate()).toBe(nextDate.getDate());
    });
});
