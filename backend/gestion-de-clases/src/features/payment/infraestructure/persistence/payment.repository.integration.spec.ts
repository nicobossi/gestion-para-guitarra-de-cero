import { StartedPostgreSqlContainer } from '@testcontainers/postgresql';
import { Payment } from '../../domain/payment';
import { PaymentRepository } from './payment.repository';
import {
    createDatabaseToContainer,
    createSqlContainer,
} from '../../../../../test/containers/sql';
import { Test } from '@nestjs/testing';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { PaymentMethod } from '../../domain/payment-method';
import { clearSqlContainer } from '../../../../../test/containers/tear-down';
import { setUp } from '../../../../../test/containers/set-up';

describe('Integration PaymentRepository', () => {
    let repository: PaymentRepository;
    let payment: Payment;
    let container: StartedPostgreSqlContainer;

    beforeAll(async () => {
        container = await createSqlContainer().start();
        createDatabaseToContainer(container);
    });

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [PaymentRepository, SqlClient],
        }).compile();

        repository = module.get<PaymentRepository>(PaymentRepository);
        payment = new Payment(
            new Date(2026, 11, 5),
            PaymentMethod.CASH,
            'Nicolás',
            'Bossi',
            1000,
            'Fernando',
        );
        await setUp();
    });

    it('should add a payment for your student and your fee', async () => {
        const addedPayment = await repository.add(payment, 1, 1);
        expect(addedPayment).toBeDefined();
    });

    afterEach(async () => {
        await clearSqlContainer();
    });

    afterAll(async () => {
        await container.stop();
    });
});
