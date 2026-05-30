import { Module } from '@nestjs/common';
import { StudentModule } from './features/student/student.module';
import { SqlModule } from './shared/infraestructure/persistence/sql/prisma.module';

@Module({
    imports: [StudentModule, SqlModule],
})
export class AppModule {}
