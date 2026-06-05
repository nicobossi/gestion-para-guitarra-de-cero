import { Injectable } from '@nestjs/common';
import { Student } from '../../domain/student';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { StudentMapper } from '../mapper/student.mapper';

@Injectable()
export class StudentRepository {
    constructor(private readonly sql: SqlClient) {}

    async income(student: Student): Promise<Student> {
        try {
            const createdStudent = await this.sql.student.create({
                data: StudentMapper.modelToSql(student),
            });
            return StudentMapper.sqlToModel(createdStudent);
        } catch (error: unknown) {
            throw this.sql.handleError(error);
        }
    }

    async clearAll(): Promise<void> {
        try {
            await this.sql.student.deleteMany();
            await this.sql.$disconnect();
        } catch (error: unknown) {
            throw this.sql.handleError(error);
        }
    }
}
