import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from './student.service';
import { StudentRepository } from '../infraestructure/persistence/student.repository';
import { SqlClient } from '../../../shared/infraestructure/persistence/sql/prisma.service';

describe('StudentService', () => {
    let service: StudentService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [StudentService, StudentRepository, SqlClient],
        }).compile();

        service = module.get<StudentService>(StudentService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
