import { Module } from '@nestjs/common';
import { FeeController } from './presentation/fee.controller';
import { FeeService } from './application/fee.service';
import { FeeRepository } from './infraestructure/persistence/fee.repository';

@Module({
    providers: [FeeService, FeeRepository],
    controllers: [FeeController],
    exports: [FeeService],
})
export class FeeModule {}
