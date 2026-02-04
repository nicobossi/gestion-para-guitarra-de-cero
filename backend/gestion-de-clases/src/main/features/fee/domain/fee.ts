import type { PaymentLapse } from "./payment-lapse";

export class Fee {
    
    private amount : number;
    private paymentLapse : PaymentLapse;
    private applicationDate : Date;
    private id : number | undefined 

    constructor(amount : number, paymentLapse : PaymentLapse, applicationDate : Date, id? : number) {
        this.amount = amount;
        this.paymentLapse = paymentLapse;
        this.applicationDate = applicationDate;
        this.id = id;
    }

    get getAmount() : number {
        return this.amount; 
    }

    get getPaymentLapse() : PaymentLapse {
        return this.paymentLapse;
    }

    get getApplicationDate() : Date {
        return this.applicationDate
    }

    get getId() : number | undefined {
        return this.id;
    }
}