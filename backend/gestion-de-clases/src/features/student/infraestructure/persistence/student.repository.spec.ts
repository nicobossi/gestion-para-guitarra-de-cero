import { Test } from '@nestjs/testing';
import { StudentRepository } from './student.repository';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { Student } from '../../domain/student';
import { RepeatEntityException } from '../../../../shared/infraestructure/persistence/errors/repeat-entity-exception';
import {
    PostgreSqlContainer,
    StartedPostgreSqlContainer,
} from '@testcontainers/postgresql';
import { execSync } from 'child_process';

describe('StudentRepository', () => {
    let container: StartedPostgreSqlContainer;
    let repository: StudentRepository;
    let student: Student;

    beforeAll(async () => {
        container = await new PostgreSqlContainer('postgres:17').start();
        process.env.DATABASE_URL = container.getConnectionUri();
        execSync('pnpm prisma migrate deploy', {
            env: {
                ...process.env,
                DATABASE_URL: container.getConnectionUri(),
            },
        });
    });

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [StudentRepository, SqlClient],
        }).compile();

        repository = module.get<StudentRepository>(StudentRepository);
        student = new Student('John', 'Dee', 1234567890, new Date(), 'Michael');
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });

    it('should income a student', async () => {
        const createdStudent = await repository.income(student);
        expect(createdStudent.getId).toBeDefined();
    });

    it('should throw the exception repeat entity exception if the phone already exists', async () => {
        const createdStudent = await repository.income(student);
        const studentWithRepeatPhone = async () =>
            await repository.income(createdStudent);
        await expect(studentWithRepeatPhone).rejects.toBeInstanceOf(
            RepeatEntityException,
        );
    });

    afterEach(async () => {
        await repository.clearAll();
    });

    afterAll(async () => {
        await container.stop();
    });
});
