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

describe('Integration FeeRepository', () => {
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

    it('should get all amounts', async () => {
        await repository.add(new Fee(200, PaymentLapse.BIWEEKLY, new Date()));
        await repository.add(new Fee(100, PaymentLapse.BIWEEKLY, new Date()));
        const amounts = await repository.getAmounts();
        expect(amounts.length).toBe(2);
        expect(amounts.find((price) => price.amount === 200)).toBeDefined();
        expect(amounts.find((price) => price.amount === 100)).toBeDefined();
    });

    afterEach(async () => {
        await clearSqlContainer();
    });

    afterAll(async () => {
        await container.stop();
    });
});
