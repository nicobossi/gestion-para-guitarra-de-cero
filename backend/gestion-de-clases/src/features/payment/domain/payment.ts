import { PaymentMethod } from './payment-method';

export class Payment {
    private date: Date;
    private nextPaymentDate: Date;
    private method: PaymentMethod;
    private firstName: string;
    private secondName?: string;
    private surname: string;
    private amount: number;

    constructor(
        date: Date,
        method: PaymentMethod,
        firstName: string,
        surname: string,
        amount: number,
        secondName?: string,
    ) {
        this.date = date;
        this.method = method;
        this.firstName = firstName;
        this.secondName = secondName;
        this.surname = surname;
        this.amount = amount;
        this.nextPaymentDate = this.calculateNextDate(date);
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
        return this.surname;
    }
    get getSecondName() {
        return this.secondName;
    }
    get getName() {
        return this.firstName;
    }
    get getPaymentMethod() {
        return this.method;
    }
}
