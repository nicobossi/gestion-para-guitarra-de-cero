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

    it('should add a student with yours four lessons', async () => {
        const incomerStudent = await repository.income(student);
        const lessons = incomerStudent.payment();
        const updateStudent = await repository.renew(
            incomerStudent,
            lessons,
        );
        expect(updateStudent.getLessons.length).toBe(4);
    });

    it('should add a student with yours four lessons and return a student with last four lessons', async () => {
        const incomerStudent = await repository.income(student);
        const firstLessons = incomerStudent.payment();
        const newStudent = await repository.renew(
            incomerStudent,
            firstLessons,
        );
        const secondLessons = newStudent.payment();
        const updateStudent = await repository.renew(
            incomerStudent,
            secondLessons,
        );
        expect(updateStudent.getLessons.length).toBe(4);
        expect(updateStudent.getLessons[0].getAttendanceDate.getTime()).toBe(
            secondLessons[0].getAttendanceDate.getTime(),
        );
    });

    it('should get students with yours lessons', async () => {
        const incomerStudent = await repository.income(student);
        const lessons = student.payment();
        await repository.renew(incomerStudent, lessons);
        const students = await repository.getWithFullname(
            student.getName,
            student.getSurname,
            student.getSecondName,
        );
        expect(students[0].getLessons.length).toBe(lessons.length);
    });

    it('should get students with yours lessons and return a student with last four lessons', async () => {
        const incomerStudent = await repository.income(student);
        const firstLessons = incomerStudent.payment();
        const newStudent = await repository.renew(
            incomerStudent,
            firstLessons,
        );
        const secondLessons = newStudent.payment();
        await repository.renew(incomerStudent, secondLessons);
        const students = await repository.getWithFullname(
            student.getName,
            student.getSurname,
            student.getSecondName,
        );
        expect(students[0].getLessons.length).toBe(4);
        expect(students[0].getLessons[0].getAttendanceDate.getTime()).toBe(
            secondLessons[0].getAttendanceDate.getTime(),
        );
    });

    afterEach(async () => {
        await clearSqlContainer();
    });

    afterAll(async () => {
        await container.stop();
    });
});
