import { Injectable } from '@nestjs/common';
import { Student } from '../../domain/student/student';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { IncomeStudent } from '../dtos/income/mapper';
import { CreateLesson } from '../dtos/renew-month/lesson-mapper';
import { StudentWithLessons } from '../dtos/renew-month/student-mapper';
import { Lesson } from '../../domain/lesson/lesson';
import { Fullname } from '../../../../shared/domain/entities/full-name';

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
        secondName: string | null = null,
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

    async renew(student: Student, lessons: Lesson[]): Promise<Student> {
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

    async getAllFullNames(): Promise<Fullname[]> {
        const fullNames = await this.sql.student.findMany({
            distinct: ['firstName', 'secondName', 'surname'],
            select: {
                firstName: true,
                secondName: true,
                surname: true,
            },
        });
        return fullNames.map(({ secondName, ...fullName }) => ({
            ...fullName,
            ...(secondName !== null && { secondName }),
        }));
    }

    async getWithPhone(phone: string): Promise<Student> {
        const student = await this.sql.student.findUniqueOrThrow({
            where: {
                phone: phone,
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
        return StudentWithLessons.sqlToModel(student);
    }
}
