import { IsDateString, IsEnum, IsNotEmpty, IsPositive } from 'class-validator';
import { PaymentLapse } from '../../../domain/payment-lapse';

export class CreateFee {
    @IsNotEmpty()
    @IsPositive()
    amount!: number;

    @IsNotEmpty()
    @IsDateString()
    applicationDate!: Date;

    @IsNotEmpty()
    @IsEnum([PaymentLapse.BIWEEKLY, PaymentLapse.MONTHLY], {
        message: `${`payment lapse must be either ${PaymentLapse.BIWEEKLY} or ${PaymentLapse.MONTHLY}`}`,
    })
    paymentLapse!: PaymentLapse;
}
