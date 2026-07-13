import {
    PaymentCreateInput,
    PaymentModel,
} from '../../../../../../generated/prisma/models';
import { Payment } from '../../../domain/payment';

export class AddPayment {
    static modelToSql(
        payment: Payment,
        idStudent: number,
        idFee: number,
    ): PaymentCreateInput {
        return {
            paymentDate: payment.getPaymentDate,
            nextPaymentDate: payment.getNextPaymentDate,
            paymentType: payment.getPaymentMethod,
            student: {
                connect: { id: idStudent },
            },
            fee: {
                connect: { id: idFee },
            },
        };
    }
    static sqlToModel(
        sql: PaymentModel,
        name: string,
        surname: string,
        amount: number,
        secondName?: string,
    ): Payment {
        return new Payment(
            sql.paymentDate,
            sql.paymentType,
            name,
            surname,
            amount,
            secondName,
            sql.id,
        );
    }
}
