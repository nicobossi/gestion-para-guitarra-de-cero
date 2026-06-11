import { Test, TestingModule } from '@nestjs/testing';
import { Fee } from '../domain/fee';
import { PaymentLapse } from '../domain/payment-lapse';
import { FeeService } from './fee.service';
import { FeeRepository } from '../infraestructure/persistence/fee.repository';

describe('Unit FeeService', () => {
    let service: FeeService;
    let fee: Fee;
    const addedFee = new Fee(500, PaymentLapse.BIWEEKLY, new Date(), 1);
    const mockRepository = {
        add: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FeeService, FeeRepository],
        })
            .overrideProvider(FeeRepository)
            .useValue(mockRepository)
            .compile();

        service = module.get<FeeService>(FeeService);
        fee = new Fee(500, PaymentLapse.BIWEEKLY, new Date());
        jest.clearAllMocks();
    });

    it('should add a fee', async () => {
        mockRepository.add.mockResolvedValue(addedFee);
        const newFee = await service.add(fee);
        expect(newFee).toBe(addedFee);
        expect(mockRepository.add).toHaveBeenCalled();
    });
});
