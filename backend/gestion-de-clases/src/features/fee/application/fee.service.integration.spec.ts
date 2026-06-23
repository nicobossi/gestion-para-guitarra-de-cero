import { Test, TestingModule } from '@nestjs/testing';
import { FeeService } from './fee.service';
import { FeeRepository } from '../infraestructure/persistence/fee.repository';
import { SqlClient } from '../../../shared/infraestructure/persistence/sql/prisma.service';
import { StartedPostgreSqlContainer } from '@testcontainers/postgresql';
import {
    createDatabaseToContainer,
    createSqlContainer,
} from '../../../../test/containers/sql';
import { clearSqlContainer } from '../../../../test/containers/tear-down';
import { Fee } from '../domain/fee';
import { PaymentLapse } from '../domain/payment-lapse';
import { UnitOfWork } from '../../../shared/infraestructure/persistence/sql/unit-of-work.service';
import { NotFoundException } from '@nestjs/common';
import { RepeatFieldException } from '../../../shared/infraestructure/persistence/errors/repeat-field-exception';

describe('Integration FeeService', () => {
    let service: FeeService;
    let container: StartedPostgreSqlContainer;
    let fee: Fee;

    beforeAll(async () => {
        container = await createSqlContainer().start();
        createDatabaseToContainer(container);
    });

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FeeService, FeeRepository, UnitOfWork, SqlClient],
        }).compile();

        service = module.get<FeeService>(FeeService);
        fee = new Fee(500, PaymentLapse.MONTHLY, new Date());
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should add a fee', async () => {
        const addedFee = await service.add(fee);
        expect(addedFee.getId).toBeDefined();
    });

    it('should catch a exception', async () => {
        const addedFee = await service.add(fee);
        const error = async () => await service.add(addedFee);
        await expect(error).rejects.toThrow(RepeatFieldException);
    });

    it('should get a fee with your amount', async () => {
        const addedFee = await service.add(fee);
        const newFee = await service.getWithAmount(addedFee.getAmount);
        expect(newFee.getAmount).toBe(fee.getAmount);
    });

    it('should catch a not found exception', async () => {
        const newFee = async () => await service.getWithAmount(fee.getAmount);
        await expect(newFee).rejects.toThrow(NotFoundException);
    });

    it('should get all prices off fee', async () => {
        const fee1 = await service.add(
            new Fee(800, PaymentLapse.MONTHLY, new Date()),
        );
        const fee2 = await service.add(
            new Fee(900, PaymentLapse.MONTHLY, new Date()),
        );
        const prices = await service.getAmounts();
        const price1 = prices.find((price) => price.amount === fee1.getAmount);
        const price2 = prices.find((price) => price.amount === fee2.getAmount);
        expect(price1).toBeDefined();
        expect(price2).toBeDefined();
    });

    afterEach(async () => {
        await clearSqlContainer();
    });

    afterAll(async () => {
        await container.stop();
    });
});
