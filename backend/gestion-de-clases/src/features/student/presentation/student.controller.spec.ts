import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';
import { StudentService } from '../application/student.service';
import { Student } from '../domain/student/student';
import { CreateStudent } from '../infraestructure/dtos/income/request';

describe('StudentController', () => {
    let controller: StudentController;
    const student = new Student(
        'Nicolás',
        'Brockhampton',
        '+541134567890',
        new Date(),
        'Carlos',
        1,
    );
    const createDto: CreateStudent = {
        name: 'Nicolás',
        surname: 'Brockhampton',
        secondName: 'Carlos',
        phone: '+541134567890',
        submissionDate: new Date(),
    };
    const mockService = {
        income: jest.fn().mockResolvedValue(student),
        getAllFullNames: jest.fn(),
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
        mockService.getAllFullNames.mockResolvedValue(fullNames);
        await controller.getAllFullNames();
        expect(mockService.getAllFullNames).toHaveBeenCalled();
    });
});
