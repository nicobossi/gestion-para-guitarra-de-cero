import { Global, Module } from '@nestjs/common';
import { SqlClient } from './prisma.service';

@Global()
@Module({
    providers: [SqlClient],
    exports: [SqlClient],
})
export class SqlModule {}
