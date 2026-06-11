import { Test, TestingModule } from '@nestjs/testing';
import { Student } from '../../domain/student';
import { StudentRepository } from './student.repository';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { RepeatPhoneException } from '../../domain/repeat-phone-exception';
import { TimeoutFilterException } from '../../../../shared/infraestructure/exception-filters/db-exception/timeout/timeout.filter';
import { RepeatFieldException } from '../../../../shared/infraestructure/persistence/errors/repeat-field-exception';

describe('Unit StudentRepository', () => {
    let repository: StudentRepository;
    let student: Student;
    const incomerStudent = new Student(
        'Nicolás',
        'A',
        1234567891,
        new Date(),
        'B',
        1,
    );

    const mockSql = {
        execute: jest.fn(),
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
        mockSql.execute.mockResolvedValue(incomerStudent);
        const newStudent = await repository.income(student);
        expect(newStudent).toBe(incomerStudent);
        expect(mockSql.execute).toHaveBeenCalled();
    });

    it('should catch a repeat phone exception', async () => {
        mockSql.execute.mockRejectedValue(new RepeatFieldException());
        const feeWithRepeatAmount = async () =>
            await repository.income(student);
        await expect(feeWithRepeatAmount).rejects.toBeInstanceOf(
            RepeatPhoneException,
        );
    });

    it('should not catch a database exception', async () => {
        mockSql.execute.mockRejectedValue(new TimeoutFilterException());
        const feeWithRepeatAmount = async () =>
            await repository.income(student);
        await expect(feeWithRepeatAmount).rejects.toBeInstanceOf(
            TimeoutFilterException,
        );
    });
});
