import { StartedPostgreSqlContainer } from '@testcontainers/postgresql';
import { RenewPaymentOrchestrator } from './payment.orchestrator';
import { Payment } from '../../domain/payment';
import {
    createDatabaseToContainer,
    createSqlContainer,
} from '../../../../../test/containers/sql';
import { Test } from '@nestjs/testing';
import { CREATED_PAYMENT } from '../../../../shared/application/create-payment';
import { PAYMENT_FEE } from '../../../../shared/application/payment-fee';
import { RENEW_STUDENT } from '../../../../shared/application/renew-student';
import { StudentService } from '../../../student/application/student.service';
import { PaymentService } from '../service/payment.service';
import { FeeService } from '../../../fee/application/fee.service';
import { clearSqlContainer } from '../../../../../test/containers/tear-down';
import { PaymentMethod } from '../../domain/payment-method';
import { Student } from '../../../student/domain/student/student';
import { Fee } from '../../../fee/domain/fee';
import { StudentModule } from '../../../student/student.module';
import { PaymentModule } from '../../payment.module';
import { FeeModule } from '../../../fee/fee.module';
import { SqlModule } from '../../../../shared/infraestructure/persistence/sql/sql.module';
import { PaymentLapse } from '../../../fee/domain/payment-lapse';

describe('Integration PaymentOrchestrator', () => {
    let student: Student;
    let fee: Fee;
    let payment: Payment;
    let studentService: StudentService;
    let feeService: FeeService;
    let orchestrator: RenewPaymentOrchestrator;
    let container: StartedPostgreSqlContainer;

    beforeAll(async () => {
        container = await createSqlContainer().start();
        createDatabaseToContainer(container);
    });

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [StudentModule, FeeModule, PaymentModule, SqlModule],
            providers: [
                RenewPaymentOrchestrator,
                {
                    provide: RENEW_STUDENT,
                    useExisting: StudentService,
                },
                {
                    provide: PAYMENT_FEE,
                    useExisting: FeeService,
                },
                {
                    provide: CREATED_PAYMENT,
                    useExisting: PaymentService,
                },
            ],
        }).compile();
        orchestrator = module.get<RenewPaymentOrchestrator>(
            RenewPaymentOrchestrator,
        );
        studentService = module.get<StudentService>(RENEW_STUDENT);
        feeService = module.get<FeeService>(PAYMENT_FEE);
        student = new Student('Nicolás', 'Bossi', 1234567890, new Date());
        fee = new Fee(100, PaymentLapse.MONTHLY, new Date());
        payment = new Payment(
            new Date(),
            PaymentMethod.MERCADO_PAGO,
            student.getName,
            student.getSurname,
            fee.getAmount,
        );
    });

    test('should orchestrate the payment process', async () => {
        await studentService.income(student);
        await feeService.add(fee);
        const addedPayment = await orchestrator.execute(payment);
        expect(addedPayment.getId).toBeDefined();
    });

    test('should create a payment with the correct amount and fullname', async () => {
        const addedStudent = await studentService.income(student);
        const addedFee = await feeService.add(fee);
        const addedPayment = await orchestrator.execute(payment);
        expect(addedPayment.getAmount).toBe(addedFee.getAmount);
        expect(addedPayment.getName).toBe(addedStudent.getName);
        expect(addedPayment.getSurname).toBe(addedStudent.getSurname);
    });

    test('should add the lessons to a student', async () => {
        await studentService.income(student);
        await feeService.add(fee);
        const addedPayment = await orchestrator.execute(payment);
        const studentWithPayment = await studentService.getWithFullname(
            addedPayment.getName,
            addedPayment.getSurname,
            addedPayment.getSecondName,
        );
        expect(studentWithPayment.getLessons.length).toBe(4);
    });

    afterEach(async () => {
        await clearSqlContainer();
    });

    afterAll(async () => {
        await container.stop();
    });
});
