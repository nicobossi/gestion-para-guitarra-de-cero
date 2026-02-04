import { Fee } from "@/main/features/fee/domain/fee";
import { PaymentLapse } from "@/main/features/fee/domain/payment-lapse";



describe("test to fee", () => {

    let fee : Fee;
    let applicationDate : Date = new Date();

    beforeEach(() => {
        fee = new Fee(40000, PaymentLapse.Monthly, applicationDate, 3);
    })

    test("a fee have an amount", () => {
        expect(fee.getAmount).toBe(40000);
    })

    test("a fee have a payment lapse", () => {
        expect(fee.getPaymentLapse).toBe(PaymentLapse.Monthly);
    })

    test("a fee have an application date", () => {
        expect(fee.getApplicationDate).toBe(applicationDate);
    })

    test("a fee have not an id", () => {
        const fee = new Fee(40000, PaymentLapse.Monthly, applicationDate);
        expect(fee.getId).not.toBe(3);
    })

    test("a fee have an id", () => {
        expect(fee.getId).toBe(3);
    })
})