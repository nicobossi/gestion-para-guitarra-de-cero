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
import { Payment } from '../../domain/payment';
import { Fee } from '../../../fee/domain/fee';
import { Student } from '../../../student/domain/student/student';

@Injectable()
export class RenewPaymentOrchestrator {
    constructor(
        @Inject(RENEW_STUDENT) private readonly studentService: RenewStudent,
        @Inject(PAYMENT_FEE) private readonly feeService: PaymentFee,
        @Inject(CREATED_PAYMENT) private readonly paymentService: CreatePayment,
    ) {}

    async execute(payment: Payment) {
        const student = await this.getStudentWithFullname(payment);
        const fee = await this.getFee(payment);
        const renewedStudent = await this.studentService.renew(student);
        return await this.addPayment(payment, renewedStudent, fee);
    }

    async reintent(payment: Payment, getPhoneNumber: number) {
        const student = await this.studentService.getWithPhone(getPhoneNumber);
        const fee = await this.getFee(payment);
        const renewedStudent = await this.studentService.renew(student);
        return await this.addPayment(payment, renewedStudent, fee);
    }

    private async addPayment(
        payment: Payment,
        renewedStudent: Student,
        fee: Fee,
    ) {
        return await this.paymentService.save(
            payment,
            renewedStudent.getId!,
            fee.getId!,
        );
    }

    private async getFee(payment: Payment) {
        return await this.feeService.getWithAmount(payment.getAmount);
    }

    private async getStudentWithFullname(payment: Payment) {
        return await this.studentService.getWithFullname(
            payment.getName,
            payment.getSurname,
            payment.getSecondName,
        );
    }
}
