import { Module } from '@nestjs/common';
import { PaymentRepository } from './infraestructure/persistence/payment.repository';
import { PaymentService } from './application/service/payment.service';
import { PaymentController } from './presentation/payment.controller';
import { StudentModule } from '../student/student.module';
import { FeeModule } from '../fee/fee.module';
import { RenewPaymentOrchestrator } from './application/orchestrator/payment.orchestrator';
import { CREATED_PAYMENT } from '../../shared/application/create-payment';
import { RENEW_STUDENT } from '../../shared/application/renew-student';
import { StudentService } from '../student/application/student.service';
import { PAYMENT_FEE } from '../../shared/application/payment-fee';
import { FeeService } from '../fee/application/fee.service';

@Module({
    providers: [
        PaymentService,
        PaymentRepository,
        RenewPaymentOrchestrator,
        {
            provide: CREATED_PAYMENT,
            useExisting: PaymentService,
        },
        {
            provide: RENEW_STUDENT,
            useExisting: StudentService,
        },
        {
            provide: PAYMENT_FEE,
            useExisting: FeeService,
        },
    ],
    controllers: [PaymentController],
    imports: [StudentModule, FeeModule],
    exports: [PaymentService, RenewPaymentOrchestrator],
})
export class PaymentModule {}
