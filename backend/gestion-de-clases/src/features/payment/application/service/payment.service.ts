import { Injectable } from '@nestjs/common';
import { Payment } from '../../domain/payment';
import { PaymentRepository } from '../../infraestructure/persistence/payment.repository';
import { UnitOfWork } from '../../../../shared/infraestructure/persistence/sql/unit-of-work.service';
import { CreatePayment } from '../../../../shared/application/create-payment';

@Injectable()
export class PaymentService implements CreatePayment {
    constructor(
        private readonly repository: PaymentRepository,
        private readonly unitOfWork: UnitOfWork,
    ) {}
    save(payment: Payment, idStudent: number, idFee: number): Promise<Payment> {
        const addPayment = () => this.repository.add(payment, idStudent, idFee);
        return this.unitOfWork.execute(addPayment);
    }
}
