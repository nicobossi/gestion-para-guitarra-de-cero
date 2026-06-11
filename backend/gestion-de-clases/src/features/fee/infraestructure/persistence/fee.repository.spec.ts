import { Test, TestingModule } from '@nestjs/testing';
import { FeeRepository } from './fee.repository';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { StartedPostgreSqlContainer } from '@testcontainers/postgresql';
import { Fee } from '../../domain/fee';
import { PaymentLapse } from '../../domain/payment-lapse';
import {
    createDatabaseToContainer,
    createSqlContainer,
} from '../../../../../test/containers/sql';
import { clearSqlContainer } from '../../../../../test/containers/tear-down';
import { RepeatAmountException } from '../../domain/repeat-amount-exception';

describe('FeeRepository', () => {
    let fee: Fee;
    let repository: FeeRepository;
    let container: StartedPostgreSqlContainer;

    beforeAll(async () => {
        container = await createSqlContainer().start();
        createDatabaseToContainer(container);
    });

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FeeRepository, SqlClient],
        }).compile();

        fee = new Fee(500, PaymentLapse.MONTHLY, new Date());
        repository = module.get<FeeRepository>(FeeRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });

    it('should add a fee', async () => {
        const addedFee = await repository.add(fee);
        expect(addedFee.getId).toBeDefined();
    });

    it('should throw the exception repeat amount exception if the amount already exists', async () => {
        const addedFee = await repository.add(fee);
        const feeWithRepeatAmount = async () => await repository.add(addedFee);
        await expect(feeWithRepeatAmount).rejects.toBeInstanceOf(
            RepeatAmountException,
        );
    });

    afterEach(async () => {
        await clearSqlContainer();
    });

    afterAll(async () => {
        await container.stop();
    });
});
