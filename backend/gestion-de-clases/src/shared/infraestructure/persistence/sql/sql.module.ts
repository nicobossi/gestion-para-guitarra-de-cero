import { Global, Module } from '@nestjs/common';
import { SqlClient } from './prisma.service';
import { UnitOfWork } from './unit-of-work.service';

@Global()
@Module({
    providers: [SqlClient, UnitOfWork],
    exports: [SqlClient, UnitOfWork],
})
export class SqlModule {}
