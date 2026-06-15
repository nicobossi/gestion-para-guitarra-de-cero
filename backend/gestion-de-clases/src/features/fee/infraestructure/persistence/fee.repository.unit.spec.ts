import { Test, TestingModule } from '@nestjs/testing';
import { Fee } from '../../domain/fee';
import { FeeRepository } from './fee.repository';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { PaymentLapse } from '../../domain/payment-lapse';
import { GatewayTimeoutException } from '@nestjs/common';

describe('Unit FeeRepository', () => {
    let repository: FeeRepository;
    let fee: Fee;
    const addedFee = new Fee(500, PaymentLapse.BIWEEKLY, new Date(), 1);

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
        expect(newFee.getId).toBe(addedFee.getId);
        expect(mockSql.fee.create).toHaveBeenCalled();
    });

    it('should not catch a database exception', async () => {
        mockSql.fee.create.mockRejectedValue(new GatewayTimeoutException());
        const feeWithRepeatAmount = async () => await repository.add(fee);
        await expect(feeWithRepeatAmount).rejects.toBeInstanceOf(
            GatewayTimeoutException,
        );
    });
});
