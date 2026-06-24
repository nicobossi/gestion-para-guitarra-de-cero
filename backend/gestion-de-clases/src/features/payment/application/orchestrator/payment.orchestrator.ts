import { Inject, Injectable } from '@nestjs/common';
import {
    PAYMENT_FEE,
    type PaymentFee,
} from '../../../../shared/application/payment-fee';
import {
    CREATED_PAYMENT,
    type CreatePayment,
} from '../../../../shared/application/create-payment';
import {
    RENEW_STUDENT,
    type RenewStudent,
} from '../../../../shared/application/renew-student';

@Injectable()
export class RenewPaymentOrchestrator {
    constructor(
        @Inject(RENEW_STUDENT) private readonly studentService: RenewStudent,
        @Inject(PAYMENT_FEE) private readonly feeService: PaymentFee,
        @Inject(CREATED_PAYMENT) private readonly paymentService: CreatePayment,
    ) {}
}
