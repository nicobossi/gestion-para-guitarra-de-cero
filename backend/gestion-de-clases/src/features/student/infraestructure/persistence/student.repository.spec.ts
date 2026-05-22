import { Test, TestingModule } from '@nestjs/testing';
import { StudentRepository } from './student.repository';
import { SqlClient } from '../../../../shared/infraestructure/persistence/prisma.service';

describe('StudentRepository', () => {
    let service: StudentRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [StudentRepository, SqlClient],
        }).compile();

        service = module.get<StudentRepository>(StudentRepository);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
