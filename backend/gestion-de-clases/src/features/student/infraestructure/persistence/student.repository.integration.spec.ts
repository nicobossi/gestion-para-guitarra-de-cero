import { Test } from '@nestjs/testing';
import { StudentRepository } from './student.repository';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { Student } from '../../domain/student/student';
import { StartedPostgreSqlContainer } from '@testcontainers/postgresql';
import {
    createDatabaseToContainer,
    createSqlContainer,
} from '../../../../../test/containers/sql';
import { clearSqlContainer } from '../../../../../test/containers/tear-down';

describe('StudentRepository', () => {
    let container: StartedPostgreSqlContainer;
    let repository: StudentRepository;
    let student: Student;

    beforeAll(async () => {
        container = await createSqlContainer().start();
        createDatabaseToContainer(container);
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

    it('should get students with full name', async () => {
        await repository.income(student);
        const students = await repository.getWithFullname(
            student.getName,
            student.getSurname,
            student.getSecondName,
        );
        expect(students[0].getName).toBe(student.getName);
        expect(students[0].getSurname).toBe(student.getSurname);
        expect(students[0].getSecondName).toBe(student.getSecondName);
    });

    afterEach(async () => {
        await clearSqlContainer();
    });

    afterAll(async () => {
        await container.stop();
    });
});
