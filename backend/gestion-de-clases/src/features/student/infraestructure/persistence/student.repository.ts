import { Injectable } from '@nestjs/common';
import { Student } from '../../domain/student/student';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { IncomeStudent } from '../dtos/income/income-student.mapper';
import { CreateLesson } from '../dtos/renew-month/create-lesson.mapper';
import { StudentWithLessons } from '../dtos/renew-month/student-with-lessons';
import { Lesson } from '../../domain/lesson/lesson';

@Injectable()
export class StudentRepository {
    constructor(private readonly sql: SqlClient) {}

    async income(student: Student): Promise<Student> {
        const dto = IncomeStudent.modelToSql(student);
        const createdStudent = await this.sql.student.create({ data: dto });
        return IncomeStudent.sqlToModel(createdStudent);
    }

    async getWithFullname(
        name: string,
        surname: string,
        secondName?: string,
    ): Promise<Student[]> {
        const students = await this.sql.student.findMany({
            where: {
                firstName: name,
                surname: surname,
                secondName: secondName,
            },
            include: {
                lessons: {
                    orderBy: {
                        attendanceDate: 'desc',
                    },
                    take: 4,
                },
            },
        });
        return students.map((student) =>
            StudentWithLessons.sqlToModel(student),
        );
    }

    async renewMonth(student: Student, lessons: Lesson[]): Promise<Student> {
        const newLessons = CreateLesson.modelToSql(lessons);
        const newStudent = await this.sql.student.update({
            where: { id: student.getId },
            data: {
                lessons: {
                    createMany: {
                        data: newLessons,
                    },
                },
            },
            include: {
                lessons: {
                    orderBy: {
                        attendanceDate: 'desc',
                    },
                    take: 4,
                },
            },
        });
        return StudentWithLessons.sqlToModel(newStudent);
    }
}
