import { Fee } from "@/main/features/fee/domain/fee";
import { PaymentLapse } from "resources/generated/prisma/enums";
import clearAll from "./clear-all";
import feeService from "@/main/features/fee/application/service/instance";
import { RepeatAmountException } from "@/main/features/fee/domain/repeat-amount-exception";



describe("tests to fee service", () => {

    let service = feeService;
    let fee : Fee;
    let applicationDate : Date;
    
    beforeEach(() => {
        applicationDate = new Date();
        fee = new Fee(30000, PaymentLapse.BIWEEKLY, applicationDate);
    });

    test("a service add an fee", async () => {

        const addedFee = await service.save(fee);
        expect(addedFee.getId).toBeDefined();
    });

    test("cannot add an fee with a duplicate amount", async () => {
        const addedFee = await service.save(fee); 
        const feeWithDuplicateAmount = async () => await service.save(addedFee);
        await expect(feeWithDuplicateAmount).rejects.toThrow(RepeatAmountException); 
    });

    afterEach(clearAll);
})