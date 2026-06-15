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
import { StudentNotFound } from './exceptions/student-not-found';
import { StudentsWithSameFullname } from './exceptions/students-with-same-fullname';
import { UnitOfWork } from '../../../shared/infraestructure/persistence/sql/unit-of-work.service';

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
            providers: [
                StudentService,
                StudentRepository,
                UnitOfWork,
                SqlClient,
            ],
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

    it('should get a student with full name', async () => {
        const newStudent = await service.income(student);
        const studentWithName = await service.getWithFullname(
            newStudent.getName,
            newStudent.getSurname,
        );
        expect(studentWithName.getName).toBe(newStudent.getName);
        expect(studentWithName.getSurname).toBe(newStudent.getSurname);
    });

    it('should catch a exception for empty list', async () => {
        const students = async () =>
            await service.getWithFullname(student.getName, student.getSurname);
        await expect(students()).rejects.toBeInstanceOf(StudentNotFound);
    });

    it('should catch a exception for students with same full name', async () => {
        const newStudent = await service.income(student);
        await service.income(
            new Student('Carlos', 'Brockhampton', 1234569891, new Date()),
        );
        const students = async () =>
            await service.getWithFullname(
                newStudent.getName,
                newStudent.getSurname,
            );
        await expect(students()).rejects.toBeInstanceOf(
            StudentsWithSameFullname,
        );
    });

    afterAll(async () => {
        await container.stop();
    });

    afterEach(async () => {
        await clearSqlContainer();
    });
});
