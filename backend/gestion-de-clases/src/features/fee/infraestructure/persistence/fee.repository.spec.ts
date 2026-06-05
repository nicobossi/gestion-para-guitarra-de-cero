import { Test, TestingModule } from '@nestjs/testing';
import { FeeRepository } from './fee.repository';

describe('FeeService', () => {
    let service: FeeRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FeeRepository],
        }).compile();

        service = module.get<FeeRepository>(FeeRepository);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
