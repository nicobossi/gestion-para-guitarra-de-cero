import { Injectable } from '@nestjs/common';
import { Student } from '../domain/student';
import { StudentRepository } from '../infraestructure/persistence/student.repository';

@Injectable()
export class StudentService {
    constructor(private readonly studentRepository: StudentRepository) {}

    async incomeStudent(student: Student): Promise<Student> {
        return await this.studentRepository.income(student);
    }
}
