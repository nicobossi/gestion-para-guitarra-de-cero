import { Test, TestingModule } from '@nestjs/testing';
import { FeeController } from './fee.controller';
import { FeeService } from '../application/fee.service';
import { FeeRepository } from '../infraestructure/persistence/fee.repository';
import { SqlClient } from '../../../shared/infraestructure/persistence/sql/prisma.service';

describe('FeeController', () => {
    let controller: FeeController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FeeController],
            providers: [FeeService, FeeRepository, SqlClient],
        }).compile();

        controller = module.get<FeeController>(FeeController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
