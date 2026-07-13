import { Module } from '@nestjs/common';
import { StudentModule } from './features/student/student.module';
import { SqlModule } from './shared/infraestructure/persistence/sql/sql.module';
import { FeeModule } from './features/fee/fee.module';
import { PaymentModule } from './features/payment/payment.module';

@Module({
    imports: [StudentModule, FeeModule, PaymentModule, SqlModule],
})
export class AppModule {}
