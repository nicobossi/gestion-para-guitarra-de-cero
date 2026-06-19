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
        });
        return students.map((student) => IncomeStudent.sqlToModel(student));
        // Cambiar el mapper para que devuelva las clases y modificar la consulta para que incluya las 4 últimas
    }

    async renewMonth(student: Student, lessons: Lesson[]): Promise<Student> {
        const newLessons = CreateLesson.modelToSql(lessons, student.getId!);
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
                lessons: true,
            },
        });
        return StudentWithLessons.sqlToModel(newStudent);
    }
}
