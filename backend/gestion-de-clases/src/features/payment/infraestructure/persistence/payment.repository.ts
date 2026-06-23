import { Injectable } from '@nestjs/common';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { Payment } from '../../domain/payment';
import { AddPayment } from '../dtos/add-payment/mapper';

@Injectable()
export class PaymentRepository {
    constructor(private readonly sql: SqlClient) {}

    async add(
        payment: Payment,
        idStudent: number,
        idFee: number,
    ): Promise<Payment> {
        const dto = AddPayment.modelToSql(payment, idStudent, idFee);
        const addedPayment = await this.sql.payment.create({
            data: dto,
        });
        return AddPayment.sqlToModel(
            addedPayment,
            payment.getName,
            payment.getSurname,
            payment.getAmount,
            payment.getSecondName,
        );
    }
}
