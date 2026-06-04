import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';
import { StudentService } from '../application/student.service';
import { SqlClient } from '../../../shared/infraestructure/persistence/sql/prisma.service';
import { StudentRepository } from '../infraestructure/persistence/student.repository';

describe('StudentController', () => {
    let controller: StudentController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [StudentController],
            providers: [StudentService, StudentRepository, SqlClient],
        }).compile();

        controller = module.get<StudentController>(StudentController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
