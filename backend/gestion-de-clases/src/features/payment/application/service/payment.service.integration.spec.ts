import { Test, TestingModule } from '@nestjs/testing';
import { PaymentService } from './payment.service';
import { PaymentRepository } from '../../infraestructure/persistence/payment.repository';
import { StartedPostgreSqlContainer } from '@testcontainers/postgresql';
import {
    createDatabaseToContainer,
    createSqlContainer,
} from '../../../../../test/containers/sql';
import { clearSqlContainer } from '../../../../../test/containers/tear-down';
import { Payment } from '../../domain/payment';
import { PaymentMethod } from '../../domain/payment-method';
import { setUp } from '../../../../../test/containers/set-up';
import { UnitOfWork } from '../../../../shared/infraestructure/persistence/sql/unit-of-work.service';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';

describe('Integration PaymentService', () => {
    let service: PaymentService;
    let container: StartedPostgreSqlContainer;
    let payment: Payment;

    beforeAll(async () => {
        container = await createSqlContainer().start();
        createDatabaseToContainer(container);
    });

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PaymentService,
                PaymentRepository,
                UnitOfWork,
                SqlClient,
            ],
        }).compile();

        service = module.get<PaymentService>(PaymentService);
        payment = new Payment(
            new Date(2025, 1, 5),
            PaymentMethod.CASH,
            'Nicolás',
            'Bossi',
            100,
        );
        await setUp();
    });

    it('should create a payment', async () => {
        const newPayment = await service.save(payment, 1, 1);
        expect(newPayment).toBeDefined();
    });

    afterEach(async () => {
        await clearSqlContainer();
    });

    afterAll(async () => {
        await container.stop();
    });
});
