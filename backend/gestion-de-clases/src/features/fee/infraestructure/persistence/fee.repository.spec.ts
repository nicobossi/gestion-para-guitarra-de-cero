import { Test, TestingModule } from '@nestjs/testing';
import { FeeRepository } from './fee.repository';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import {
    PostgreSqlContainer,
    StartedPostgreSqlContainer,
} from '@testcontainers/postgresql';
import { execSync } from 'child_process';
import { Fee } from '../../domain/fee';
import { PaymentLapse } from '../../domain/payment-lapse';
import { RepeatEntityException } from '../../../../shared/infraestructure/persistence/errors/repeat-entity-exception';

describe('FeeRepository', () => {
    let fee: Fee;
    let repository: FeeRepository;
    let container: StartedPostgreSqlContainer;

    beforeAll(async () => {
        container = await new PostgreSqlContainer('postgres:17').start();
        process.env.DATABASE_URL = container.getConnectionUri();
        execSync('pnpm prisma migrate deploy', {
            env: {
                DATABASE_URL: process.env.DATABASE_URL,
            },
        });
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

    it('should throw the exception repeat entity exception if the amount already exists', async () => {
        const addedFee = await repository.add(fee);
        const feeWithRepeatAmount = async () => await repository.add(addedFee);
        await expect(feeWithRepeatAmount).rejects.toBeInstanceOf(
            RepeatEntityException,
        );
    });

    afterEach(async () => {
        await repository.clearAll();
    });

    afterAll(async () => {
        await container.stop();
    });
});
