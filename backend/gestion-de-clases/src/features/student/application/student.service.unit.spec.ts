import { Test, TestingModule } from '@nestjs/testing';
import { Student } from '../domain/student';
import { StudentService } from './student.service';
import { StudentRepository } from '../infraestructure/persistence/student.repository';
import { StudentNotFound } from './student-not-found';
import { StudentsWithSameFullname } from './students-with-same-fullname';

describe('Unit FeeService', () => {
    let service: StudentService;
    let student: Student;
    const incomerStudent = new Student(
        'Nicolás',
        'A',
        1234567891,
        new Date(),
        'B',
        1,
    );
    const mockRepository = {
        income: jest.fn(),
        getWithFullname: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [StudentService, StudentRepository],
        })
            .overrideProvider(StudentRepository)
            .useValue(mockRepository)
            .compile();

        service = module.get<StudentService>(StudentService);
        student = new Student('Nicolás', 'A', 1234567891, new Date(), 'B');
        jest.clearAllMocks();
    });

    it('should income a student', async () => {
        mockRepository.income.mockResolvedValue(incomerStudent);
        const newStudent = await service.income(student);
        expect(newStudent).toBe(incomerStudent);
        expect(mockRepository.income).toHaveBeenCalled();
    });

    it('should get a student with full name', async () => {
        mockRepository.getWithFullname.mockResolvedValue([student]);
        const studentWithName = await service.getWithFullname(
            student.getName,
            student.getSurname,
            student.getSecondName,
        );
        expect(studentWithName.getName).toBe(student.getName);
        expect(studentWithName.getSurname).toBe(student.getSurname);
        expect(studentWithName.getSecondName).toBe(student.getSecondName);
    });

    it('should catch a exception for empty list', async () => {
        mockRepository.getWithFullname.mockResolvedValue([]);
        const students = async () =>
            await service.getWithFullname(
                student.getName,
                student.getSurname,
                student.getSecondName,
            );
        await expect(students()).rejects.toBeInstanceOf(StudentNotFound);
    });

    it('should catch a exception for students with same full name', async () => {
        mockRepository.getWithFullname.mockResolvedValue([
            incomerStudent,
            student,
        ]);
        const students = async () =>
            await service.getWithFullname(
                student.getName,
                student.getSurname,
                student.getSecondName,
            );
        await expect(students()).rejects.toBeInstanceOf(
            StudentsWithSameFullname,
        );
    });
});
