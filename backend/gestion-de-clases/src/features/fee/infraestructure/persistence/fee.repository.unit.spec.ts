import { Test, TestingModule } from '@nestjs/testing';
import { Fee } from '../../domain/fee';
import { FeeRepository } from './fee.repository';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { PaymentLapse } from '../../domain/payment-lapse';
import { RepeatAmountException } from '../../domain/repeat-amount-exception';
import { RepeatFieldException } from '../../../../shared/infraestructure/persistence/errors/repeat-field-exception';
import { GatewayTimeoutException } from '@nestjs/common';

describe('Unit FeeRepository', () => {
    let repository: FeeRepository;
    let fee: Fee;
    const addedFee = new Fee(500, PaymentLapse.BIWEEKLY, new Date(), 1);

    const mockSql = {
        execute: jest.fn(),
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
        mockSql.execute.mockResolvedValue(addedFee);
        const newFee = await repository.add(fee);
        expect(newFee).toBe(addedFee);
        expect(mockSql.execute).toHaveBeenCalled();
    });

    it('should catch a repeat amount exception', async () => {
        mockSql.execute.mockRejectedValue(new RepeatFieldException());
        const feeWithRepeatAmount = async () => await repository.add(fee);
        await expect(feeWithRepeatAmount).rejects.toBeInstanceOf(
            RepeatAmountException,
        );
    });

    it('should not catch a database exception', async () => {
        mockSql.execute.mockRejectedValue(new GatewayTimeoutException());
        const feeWithRepeatAmount = async () => await repository.add(fee);
        await expect(feeWithRepeatAmount).rejects.toBeInstanceOf(
            GatewayTimeoutException,
        );
    });
});
