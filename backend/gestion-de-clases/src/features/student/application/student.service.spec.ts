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
import { RepeatPhoneException } from '../domain/repeat-phone-exception';

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

    it('should throw the exception repeat phone exception if the phone already exists', async () => {
        const incomerStudent = await service.income(student);
        const studentWithRepeatPhone = async () =>
            await service.income(incomerStudent);
        await expect(studentWithRepeatPhone).rejects.toBeInstanceOf(
            RepeatPhoneException,
        );
    });

    afterAll(async () => {
        await container.stop();
    });

    afterEach(async () => {
        await clearSqlContainer();
    });
});
