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

    afterEach(async () => {
        await clearSqlContainer();
    });

    afterAll(async () => {
        await container.stop();
    });
});
