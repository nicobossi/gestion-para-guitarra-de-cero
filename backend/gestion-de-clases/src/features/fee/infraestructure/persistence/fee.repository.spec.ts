import { Test, TestingModule } from '@nestjs/testing';
import { FeeRepository } from './fee.repository';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';

describe('FeeRepository', () => {
    let service: FeeRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FeeRepository, SqlClient],
        }).compile();

        service = module.get<FeeRepository>(FeeRepository);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
