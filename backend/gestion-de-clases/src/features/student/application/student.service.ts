import { Injectable } from '@nestjs/common';
import { Student } from '../domain/student/student';
import { StudentRepository } from '../infraestructure/persistence/student.repository';
import { StudentNotFound } from './exceptions/student-not-found';
import { StudentsWithSameFullname } from './exceptions/students-with-same-fullname';
import { UnitOfWork } from '../../../shared/infraestructure/persistence/sql/unit-of-work.service';
@Injectable()
export class StudentService {
    constructor(
        private readonly studentRepository: StudentRepository,
        private readonly unitOfWork: UnitOfWork,
    ) {}

    async income(student: Student): Promise<Student> {
        const income = () => this.studentRepository.income(student);
        return this.unitOfWork.execute(income);
    }

    async getWithFullname(
        name: string,
        surname: string,
        secondName?: string,
    ): Promise<Student> {
        const getStudents = () =>
            this.studentRepository.getWithFullname(name, surname, secondName);
        const students = await this.unitOfWork.execute(getStudents);
        if (students.length == 0) {
            throw new StudentNotFound(name, surname, secondName);
        }

        if (students.length > 1) {
            throw new StudentsWithSameFullname(name, surname, secondName);
        }

        return students[0];
    }
}
