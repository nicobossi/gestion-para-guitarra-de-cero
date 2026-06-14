import { Injectable } from '@nestjs/common';
import { Student } from '../domain/student';
import { StudentRepository } from '../infraestructure/persistence/student.repository';
import { StudentNotFound } from './student-not-found';
import { StudentsWithSameFullname } from './students-with-same-fullname';
@Injectable()
export class StudentService {
    constructor(private readonly studentRepository: StudentRepository) {}

    async income(student: Student): Promise<Student> {
        return await this.studentRepository.income(student);
    }

    async getWithFullname(
        name: string,
        surname: string,
        secondName?: string,
    ): Promise<Student> {
        const students = await this.studentRepository.getWithFullname(
            name,
            surname,
            secondName,
        );
        if (students.length == 0) {
            throw new StudentNotFound(name, surname, secondName);
        }

        if (students.length > 1) {
            throw new StudentsWithSameFullname(name, surname, secondName);
        }

        return students[0];
    }
}
