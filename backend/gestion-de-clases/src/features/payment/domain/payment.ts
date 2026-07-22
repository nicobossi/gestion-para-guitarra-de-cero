import { FullName } from '../../../shared/domain/value-objects/full-name/full-name';
import { PaymentMethod } from './payment-method';

export class Payment {
    private date: Date;
    private nextPaymentDate: Date;
    private method: PaymentMethod;
    private amount: number;
    private fullName: FullName;
    private id?: number;

    constructor(
        date: Date,
        method: PaymentMethod,
        firstName: string,
        surname: string,
        amount: number,
        secondName?: string,
        id?: number,
    ) {
        this.fullName = new FullName(firstName, surname, secondName);
        this.date = date;
        this.method = method;
        this.amount = amount;
        this.nextPaymentDate = this.calculateNextDate(date);
        this.id = id;
    }
    private calculateNextDate(date: Date): Date {
        const nextDate = new Date(date);
        nextDate.setDate(date.getDate() + this.nextDayOnMonth());
        return nextDate;
    }

    private nextDayOnMonth() {
        return 28;
    }

    get getNextPaymentDate() {
        return this.nextPaymentDate;
    }
    get getAmount() {
        return this.amount;
    }
    get getPaymentDate() {
        return this.date;
    }
    get getSurname() {
        return this.fullName.getLastName;
    }
    get getSecondName() {
        return this.fullName.getSecondName;
    }
    get getName() {
        return this.fullName.getFirstName;
    }
    get getPaymentMethod() {
        return this.method;
    }
    get getId() {
        return this.id;
    }
}
