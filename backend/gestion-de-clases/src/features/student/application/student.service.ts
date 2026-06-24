import { Injectable } from '@nestjs/common';
import { Student } from '../domain/student/student';
import { StudentRepository } from '../infraestructure/persistence/student.repository';
import { StudentNotFound } from './exceptions/student-not-found';
import { StudentsWithSameFullname } from './exceptions/students-with-same-fullname';
import { UnitOfWork } from '../../../shared/infraestructure/persistence/sql/unit-of-work.service';
import { Fullname } from '../domain/types/full-name';
import { RenewStudent } from '../../../shared/application/renew-student';
@Injectable()
export class StudentService implements RenewStudent {
    constructor(
        private readonly studentRepository: StudentRepository,
        private readonly unitOfWork: UnitOfWork,
    ) {}

    income(student: Student): Promise<Student> {
        const income = () => this.studentRepository.income(student);
        return this.unitOfWork.execute(income);
    }

    async getWithFullname(
        name: string,
        surname: string,
        secondName: string | null = null,
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

    renew(student: Student): Promise<Student> {
        const lessons = student.payment();
        const renew = () => this.studentRepository.renew(student, lessons);
        return this.unitOfWork.execute(renew);
    }

    getAllFullNames(): Promise<Fullname[]> {
        const fullNames = () => this.studentRepository.getAllFullNames();
        return this.unitOfWork.execute(fullNames);
    }
}
