import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from './student.service';
import { StudentRepository } from '../infraestructure/persistence/student.repository';
import { SqlClient } from '../../../shared/infraestructure/persistence/sql/prisma.service';
import { StartedPostgreSqlContainer } from '@testcontainers/postgresql';
import {
    createDatabaseToContainer,
    createSqlContainer,
} from '../../../../test/containers/sql';
import { clearSqlContainer } from '../../../../test/containers/tear-down';
import { Student } from '../domain/student';

describe('StudentService', () => {
    let student: Student;
    let service: StudentService;
    let container: StartedPostgreSqlContainer;

    beforeAll(async () => {
        container = await createSqlContainer().start();
        createDatabaseToContainer(container);
    });

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [StudentService, StudentRepository, SqlClient],
        }).compile();

        student = new Student('Carlos', 'Brockhampton', 1234567891, new Date());
        service = module.get<StudentService>(StudentService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should incoming a student', async () => {
        const incomerStudent = await service.income(student);
        expect(incomerStudent.getId).toBeDefined();
    });

    afterAll(async () => {
        await container.stop();
    });

    afterEach(async () => {
        await clearSqlContainer();
    });
});
