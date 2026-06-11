import { Injectable } from '@nestjs/common';
import { Student } from '../domain/student';
import { StudentRepository } from '../infraestructure/persistence/student.repository';
import { RepeatFieldException } from '../../../shared/infraestructure/persistence/errors/repeat-field-exception';

@Injectable()
export class StudentService {
    constructor(private readonly studentRepository: StudentRepository) {}

    async income(student: Student): Promise<Student> {
        try {
            return await this.studentRepository.income(student);
        } catch (error: unknown) {
            if (error instanceof RepeatFieldException) {
                throw student.repeatPhoneException();
            }
            throw error;
        }
    }
}
