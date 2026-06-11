import { Test, TestingModule } from '@nestjs/testing';
import { FeeController } from './fee.controller';
import { FeeService } from '../application/fee.service';
import { Fee } from '../domain/fee';
import { PaymentLapse } from '../domain/payment-lapse';

describe('FeeController', () => {
    let controller: FeeController;
    const addedFee = new Fee(500, PaymentLapse.BIWEEKLY, new Date(), 1);
    const mockService = {
        add: jest.fn().mockResolvedValue(addedFee),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FeeController],
            providers: [FeeService],
        })
            .overrideProvider(FeeService)
            .useValue(mockService)
            .compile();

        controller = module.get<FeeController>(FeeController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should add a fee', async () => {
        const fee = {
            amount: addedFee.getAmount,
            paymentLapse: addedFee.getPaymentLapse,
            applicationDate: new Date(),
        };
        await controller.add(fee);
        expect(mockService.add).toHaveBeenCalled();
    });
});
