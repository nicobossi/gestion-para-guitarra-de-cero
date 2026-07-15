import { Test, TestingModule } from '@nestjs/testing';
import { Student } from '../domain/student/student';
import { StudentService } from './student.service';
import { StudentRepository } from '../infraestructure/persistence/student.repository';
import { StudentNotFound } from '../../../shared/application/exceptions/student-not-found';
import { UnitOfWork } from '../../../shared/infraestructure/persistence/sql/unit-of-work.service';
import { Lesson } from '../domain/lesson/lesson';
import { StudentsWithSameFullname } from '../../../shared/application/exceptions/students-with-same-fullname';

describe('Unit StudentService', () => {
    let service: StudentService;
    let student: Student;
    const incomerStudent = new Student(
        'Nicolás',
        'A',
        '+541134567890',
        new Date(),
        'B',
        1,
    );
    const studentWithLessons = new Student(
        'Nicolás',
        'A',
        '+541134567890',
        new Date(),
        'B',
        1,
        [
            new Lesson(new Date(2026, 5, 1)),
            new Lesson(new Date(2026, 5, 8)),
            new Lesson(new Date(2026, 5, 15)),
            new Lesson(new Date(2026, 5, 22)),
        ],
    );
    const mockRepository = {
        income: jest.fn(),
        getWithFullname: jest.fn(),
        getAllFullNames: jest.fn(),
        getWithPhone: jest.fn(),
        renew: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [StudentService, StudentRepository, UnitOfWork],
        })
            .overrideProvider(StudentRepository)
            .useValue(mockRepository)
            .compile();

        service = module.get<StudentService>(StudentService);
        student = new Student('Nicolás', 'A', '+541134567890', new Date(), 'B');
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

        expect(mockRepository.getWithFullname).toHaveBeenCalledWith(
            student.getName,
            student.getSurname,
            student.getSecondName,
        );
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

    it('should get student without lessons', async () => {
        mockRepository.getWithFullname.mockResolvedValue([incomerStudent]);
        const students = await service.getWithFullname(
            student.getName,
            student.getSurname,
            student.getSecondName,
        );
        expect(students.getLessons.length).toBe(0);
    });

    it('should renew the student lessons', async () => {
        mockRepository.renew.mockResolvedValue(studentWithLessons);
        const updateStudent = await service.renew(student);
        expect(updateStudent.getLessons.length).toBe(4);
        expect(mockRepository.renew).toHaveBeenCalled();
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
        mockRepository.getAllFullNames.mockResolvedValue(fullNames);
        const newFullNames = await service.getAllFullNames();
        expect(newFullNames.length).toBe(3);
        expect(mockRepository.getAllFullNames).toHaveBeenCalled();
    });

    it('should get a student with a your phone', async () => {
        mockRepository.getWithPhone.mockResolvedValue(studentWithLessons);
        const newStudent = await service.getWithPhone(
            studentWithLessons.getPhoneNumber,
        );
        expect(newStudent.getPhoneNumber).toBe('+541134567890');
    });
});
