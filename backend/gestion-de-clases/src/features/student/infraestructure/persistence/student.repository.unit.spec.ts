import { Test, TestingModule } from '@nestjs/testing';
import { Student } from '../../domain/student';
import { StudentRepository } from './student.repository';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';

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

    const mockSql = {
        student: {
            create: jest.fn(),
            findMany: jest.fn(),
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
        mockSql.student.findMany.mockResolvedValue([incomerStudent]);
        const students = await repository.getWithFullname(
            incomerStudent.firstName,
            incomerStudent.surname,
            incomerStudent.secondName,
        );
        console.log(students);
        expect(students[0].getName).toBe(incomerStudent.firstName);
        expect(students[0].getSurname).toBe(incomerStudent.surname);
        expect(students[0].getSecondName).toBe(incomerStudent.secondName);
        expect(mockSql.student.findMany).toHaveBeenCalled();
    });
});
