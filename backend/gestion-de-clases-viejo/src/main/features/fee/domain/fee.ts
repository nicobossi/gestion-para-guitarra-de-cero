import type { PaymentLapse } from "@/main/shared/domain/types/payment-lapse";
import { RepeatAmountException } from "./repeat-amount-exception";
import { CauseModelError } from "@/main/shared/infraestructure/domain/cause.error";

export class Fee {
    
    private amount : number;
    private paymentLapse : PaymentLapse;
    private applicationDate : Date;
    private readonly id? : number;

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

    repeatAmountException() : RepeatAmountException {
        return new RepeatAmountException(this.repeatAmountMessage(), CauseModelError.RepeatFeeAmount);
    }

    private repeatAmountMessage() : string {
        return "Una cuota no puede tener un monto repetido"
    }
}