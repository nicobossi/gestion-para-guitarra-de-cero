import { Module } from '@nestjs/common';
import { PaymentRepository } from './infraestructure/persistence/payment.repository';

@Module({
    providers: [PaymentRepository],
})
export class PaymentModule {}
