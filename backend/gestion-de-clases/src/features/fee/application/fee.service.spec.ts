import { Test, TestingModule } from '@nestjs/testing';
import { FeeService } from './fee.service';
import { FeeRepository } from '../infraestructure/persistence/fee.repository';
import { SqlClient } from '../../../shared/infraestructure/persistence/sql/prisma.service';

describe('FeeService', () => {
    let service: FeeService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FeeService, FeeRepository, SqlClient],
        }).compile();

        service = module.get<FeeService>(FeeService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
