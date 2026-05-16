import { Fee } from "@/main/features/fee/domain/fee";
import clearAll from "./clear-all";
import feeRepository from "@/main/features/fee/infraestructure/persistence/repository/instance";
import type { FeeRepository } from "@/main/features/fee/infraestructure/persistence/repository/fee.repository.i";
import { PaymentLapse } from "@/main/shared/domain/types/payment-lapse";



describe("test to fee repository", () => {

    let repository : FeeRepository = feeRepository;
    let fee : Fee 
    let applicationDate : Date;

    beforeEach(() => {
        applicationDate = new Date();
        fee = new Fee(200, PaymentLapse.MONTHLY, applicationDate);
    })

    test("a repository added a fee", async () => {
        const addedFee = await repository.add(fee);
        expect(addedFee.getId).toBeDefined();
    })

    afterEach(() => clearAll())
})