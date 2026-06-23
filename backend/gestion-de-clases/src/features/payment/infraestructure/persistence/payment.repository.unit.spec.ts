import { Test, TestingModule } from '@nestjs/testing';
import { PaymentRepository } from './payment.repository';
import { Payment } from '../../domain/payment';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { PaymentMethod } from '../../domain/payment-method';

describe('Unit PaymentRepository', () => {
    let repository: PaymentRepository;
    let payment: Payment;
    const addedPayment = {
        paymentDate: new Date(2026, 11, 5),
        nextPaymentDate: new Date(2027, 0, 2),
        paymentType: PaymentMethod.CASH,
    };
    const sqlMock = {
        payment: {
            create: jest.fn(),
        },
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PaymentRepository, SqlClient],
        })
            .overrideProvider(SqlClient)
            .useValue(sqlMock)
            .compile();

        repository = module.get<PaymentRepository>(PaymentRepository);
        payment = new Payment(
            new Date(2026, 11, 5),
            PaymentMethod.CASH,
            'Nicolás',
            'Bossi',
            1000,
            'Fernando',
        );
    });

    it('should add a payment for your student and your fee', async () => {
        sqlMock.payment.create.mockResolvedValue(addedPayment);
        await repository.add(payment, 1, 1);
        expect(sqlMock.payment.create).toHaveBeenCalled();
    });
});
