import { Test, TestingModule } from '@nestjs/testing';
import { RenewPaymentController } from './renew-payment.controller';
import { RenewPaymentOrchestrator } from '../../application/orchestrator/payment.orchestrator';

describe('PaymentController', () => {
    let controller: RenewPaymentController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RenewPaymentOrchestrator],
            controllers: [RenewPaymentController],
        }).compile();

        controller = module.get<RenewPaymentController>(RenewPaymentController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
