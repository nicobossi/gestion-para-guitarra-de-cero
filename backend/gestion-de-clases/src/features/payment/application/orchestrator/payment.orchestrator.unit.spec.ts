import { RenewPaymentOrchestrator } from './payment.orchestrator';
import { Test, TestingModule } from '@nestjs/testing';
import { PAYMENT_FEE } from '../../../../shared/application/payment-fee';
import { CREATED_PAYMENT } from '../../../../shared/application/create-payment';
import { RENEW_STUDENT } from '../../../../shared/application/renew-student';
import { UnitOfWork } from '../../../../shared/infraestructure/persistence/sql/unit-of-work.service';
import { Payment } from '../../domain/payment';
import { PaymentMethod } from '../../domain/payment-method';
import { Student } from '../../../student/domain/student/student';
import { Fee } from '../../../fee/domain/fee';

describe('Unit PaymentOrchestratorTest', () => {
    let orchestrator: RenewPaymentOrchestrator;
    let payment: Payment;
    let student: Student;
    let fee: Fee;
    const studentService = {
        renew: jest.fn(),
        getWithFullname: jest.fn(),
    };
    const feeService = {
        getWithAmount: jest.fn(),
    };
    const paymentService = {
        save: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UnitOfWork,
                RenewPaymentOrchestrator,
                {
                    provide: RENEW_STUDENT,
                    useValue: studentService,
                },
                {
                    provide: PAYMENT_FEE,
                    useValue: feeService,
                },
                {
                    provide: CREATED_PAYMENT,
                    useValue: paymentService,
                },
            ],
        }).compile();
        orchestrator = module.get<RenewPaymentOrchestrator>(
            RenewPaymentOrchestrator,
        );
        student = new Student(
            'Nicolas',
            'Bossi',
            1234567890,
            new Date(2023, 0, 1),
            'Fernando',
            1,
        );
        fee = new Fee(500, 'MONTHLY', new Date(2023, 0, 1), 1);
        payment = new Payment(
            new Date(2023, 0, 1),
            PaymentMethod.CASH,
            'Nicolas',
            'Bossi',
            500,
            'Fernando',
            1,
        );
        studentService.getWithFullname.mockResolvedValue(student);
        feeService.getWithAmount.mockResolvedValue(fee);
        studentService.renew.mockResolvedValue(student);
        paymentService.save.mockResolvedValue(payment);
    });

    test('should find a student with your full name', async () => {
        await orchestrator.execute(payment);
        expect(studentService.getWithFullname).toHaveBeenCalledWith(
            'Nicolas',
            'Bossi',
            'Fernando',
        );
    });

    test('should find a fee with your amount', async () => {
        await orchestrator.execute(payment);
        expect(feeService.getWithAmount).toHaveBeenCalledWith(500);
    });

    test('should renew the lessons of the student', async () => {
        await orchestrator.execute(payment);
        expect(studentService.renew).toHaveBeenCalled();
    });

    test('should create the payment', async () => {
        await orchestrator.execute(payment);
        expect(paymentService.save).toHaveBeenCalled();
    });

    test('should return a payment with youtr id', async () => {
        const addedPayment = await orchestrator.execute(payment);
        expect(addedPayment.getId).toBe(1);
    });
});
