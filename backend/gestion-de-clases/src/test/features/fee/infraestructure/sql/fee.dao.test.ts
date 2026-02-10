import { Fee } from "@/main/features/fee/domain/fee";
import clearAll from "./clear-all"
import { PaymentLapse } from "@/main/features/fee/domain/payment-lapse";
import feeDao from "@/main/features/fee/infraestructure/persistence/sql/instance";
import type { FeeDao } from "@/main/features/fee/infraestructure/persistence/sql/fee.dao.i";
import { RepeatEntityException } from "@/main/shared/infraestructure/persistence/errors/exceptions/exceptions";



describe("test to fee DAO", () => {

    let dao : FeeDao = feeDao;
    let fee : Fee;
    let applicationDate : Date;

    beforeEach(() => {
        applicationDate = new Date();
        fee = new Fee(200, PaymentLapse.Monthly, applicationDate);
    })

    test("a fee is added", async () => {
        const addedFee = await dao.save(fee);
        expect(addedFee.getId).toBeDefined();
    })

    test("a fee is not added when exist same id", async () => {
        const addedFee = await dao.save(fee);
        const addedDuplicate = async () => await dao.save(addedFee);
        await expect(addedDuplicate).rejects.toThrow(RepeatEntityException);
    })

    test("a fee is not add when exist same amount", async () => {
        await dao.save(fee);
        const feeWithSameAmount = new Fee(200, PaymentLapse.Biweekly, applicationDate);
        const addedDuplicate = async () => await dao.save(feeWithSameAmount);
        expect(addedDuplicate).rejects.toThrow(RepeatEntityException);
    })

    afterEach(() => clearAll())
})