import { Test, TestingModule } from '@nestjs/testing';
import { Student } from '../../domain/student/student';
import { StudentRepository } from './student.repository';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { Lesson } from '../../domain/lesson/lesson';

describe('Unit StudentRepository', () => {
    let repository: StudentRepository;
    let student: Student;
    const incomerStudent = {
        id: 1,
        firstName: 'Nicolás',
        surname: 'A',
        phone: 1234567891,
        submissionDate: new Date(),
        secondName: 'B',
    };
    const studentWithLessons = {
        id: 1,
        firstName: 'Nicolás',
        surname: 'A',
        phone: 1234567891,
        submissionDate: new Date(),
        secondName: 'B',
        lessons: [
            new Lesson(new Date()),
            new Lesson(new Date()),
            new Lesson(new Date()),
            new Lesson(new Date()),
        ],
    };

    const mockSql = {
        student: {
            create: jest.fn(),
            findMany: jest.fn(),
            update: jest.fn(),
        },
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [StudentRepository, SqlClient],
        })
            .overrideProvider(SqlClient)
            .useValue(mockSql)
            .compile();

        repository = module.get<StudentRepository>(StudentRepository);
        student = new Student('Nicolás', 'A', 1234567891, new Date(), 'B');
        jest.clearAllMocks();
    });

    it('should income a student', async () => {
        mockSql.student.create.mockResolvedValue(incomerStudent);
        const newStudent = await repository.income(student);
        expect(newStudent.getId).toBe(incomerStudent.id);
        expect(mockSql.student.create).toHaveBeenCalled();
    });

    it('should get students with full name', async () => {
        mockSql.student.findMany.mockResolvedValue([studentWithLessons]);
        const students = await repository.getWithFullname(
            incomerStudent.firstName,
            incomerStudent.surname,
            incomerStudent.secondName,
        );
        expect(students[0].getName).toBe(incomerStudent.firstName);
        expect(students[0].getSurname).toBe(incomerStudent.surname);
        expect(students[0].getSecondName).toBe(incomerStudent.secondName);
        expect(mockSql.student.findMany).toHaveBeenCalled();
    });

    it('should get students with yours lessons', async () => {
        mockSql.student.findMany.mockResolvedValue([studentWithLessons]);
        const students = await repository.getWithFullname(
            incomerStudent.firstName,
            incomerStudent.surname,
            incomerStudent.secondName,
        );
        expect(students[0].getLessons.length).toBe(4);
        expect(mockSql.student.findMany).toHaveBeenCalled();
    });

    it('should get all full names', async () => {
        const fullNames = [
            {
                name: 'Roberto',
                secondName: 'Ameri',
                surname: 'Diaz',
            },
            {
                name: 'Nicolás',
                secondName: 'Fernando',
                surname: 'Bartolo',
            },
            {
                name: 'Mariana',
                surname: 'Rodriguez',
            },
        ];
        mockSql.student.findMany.mockResolvedValue(fullNames);
        const newFullNames = await repository.getAllFullNames();
        expect(newFullNames.length).toBe(3);
        expect(mockSql.student.findMany).toHaveBeenCalled();
    });
});
