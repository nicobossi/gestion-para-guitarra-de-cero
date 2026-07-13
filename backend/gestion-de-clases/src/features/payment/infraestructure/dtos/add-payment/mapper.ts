import {
    PaymentCreateInput,
    PaymentModel,
} from '../../../../../../generated/prisma/models';
import { Payment } from '../../../domain/payment';
import { RenewPayment } from './request';

export class AddPayment {
    static modelToDto(renewedPayment: Payment) {
        return {
            id: renewedPayment.getId,
            amount: renewedPayment.getAmount,
            name: renewedPayment.getName,
            surname: renewedPayment.getSurname,
            secondName: renewedPayment.getSecondName,
            paymentDate: renewedPayment.getPaymentDate,
            nextPaymentDate: renewedPayment.getNextPaymentDate,
            paymentMethod: renewedPayment.getPaymentMethod,
        };
    }
    static dtoToModel(payment: RenewPayment) {
        return new Payment(
            payment.paymentDate,
            payment.paymentMethod,
            payment.name,
            payment.surname,
            payment.amount,
            payment.secondName,
        );
    }
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
