import { Test, TestingModule } from '@nestjs/testing';
import { Fee } from '../../domain/fee';
import { FeeRepository } from './fee.repository';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { PaymentLapse } from '../../domain/payment-lapse';

describe('Unit FeeRepository', () => {
    let repository: FeeRepository;
    let fee: Fee;
    const addedFee = {
        id: 1,
        amount: 500,
        paymentLapse: PaymentLapse.BIWEEKLY,
        applicationDate: new Date(),
    };

    const mockSql = {
        fee: {
            create: jest.fn(),
        },
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FeeRepository, SqlClient],
        })
            .overrideProvider(SqlClient)
            .useValue(mockSql)
            .compile();

        repository = module.get<FeeRepository>(FeeRepository);
        fee = new Fee(500, PaymentLapse.BIWEEKLY, new Date());
        jest.clearAllMocks();
    });

    it('should add a fee', async () => {
        mockSql.fee.create.mockResolvedValue(addedFee);
        const newFee = await repository.add(fee);
        expect(newFee.getId).toBe(addedFee.id);
        expect(mockSql.fee.create).toHaveBeenCalled();
    });
});
