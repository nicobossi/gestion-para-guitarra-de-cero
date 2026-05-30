import { Test, TestingModule } from '@nestjs/testing';
import { StudentRepository } from './student.repository';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';

describe('StudentRepository', () => {
    let repository: StudentRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [StudentRepository, SqlClient],
        }).compile();

        repository = module.get<StudentRepository>(StudentRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
});
