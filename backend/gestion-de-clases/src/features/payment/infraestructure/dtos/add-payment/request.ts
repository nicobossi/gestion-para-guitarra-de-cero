import {
    IsDateString,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsPositive,
    IsString,
} from 'class-validator';
import { PaymentMethod } from '../../../domain/payment-method';

export class RenewPayment {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    surname!: string;

    @IsNotEmpty()
    @IsDateString()
    paymentDate!: Date;

    @IsEnum(PaymentMethod, {
        message: `${`payment method must be either ${PaymentMethod.CASH} or ${PaymentMethod.MERCADO_PAGO}`}`,
    })
    paymentMethod!: PaymentMethod;

    @IsNumber()
    @IsPositive()
    amount!: number;

    @IsString()
    @IsOptional()
    secondName?: string;
}
