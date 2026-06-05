import { Module } from '@nestjs/common';
import { StudentModule } from './features/student/student.module';
import { SqlModule } from './shared/infraestructure/persistence/sql/prisma.module';
import { FeeModule } from './features/fee/fee.module';

@Module({
    imports: [StudentModule, FeeModule, SqlModule],
})
export class AppModule {}
