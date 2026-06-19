import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';
import { StudentService } from '../application/student.service';
import { Student } from '../domain/student';
import { CreateStudent } from '../infraestructure/dtos/income/create-student-request';

describe('StudentController', () => {
    let controller: StudentController;
    const student = new Student(
        'Nicolás',
        'Brockhampton',
        1234567891,
        new Date(),
        'Carlos',
        1,
    );
    const createDto: CreateStudent = {
        name: 'Nicolás',
        surname: 'Brockhampton',
        secondName: 'Carlos',
        phone: '1234567891',
        submissionDate: new Date(),
    };
    const mockService = {
        income: jest.fn().mockResolvedValue(student),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [StudentController],
            providers: [StudentService],
        })
            .overrideProvider(StudentService)
            .useValue(mockService)
            .compile();

        controller = module.get<StudentController>(StudentController);
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should income a student', async () => {
        await controller.income(createDto);
        expect(mockService.income).toHaveBeenCalled();
    });
});
