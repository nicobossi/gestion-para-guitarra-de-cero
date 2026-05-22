import { Injectable } from '@nestjs/common';
import { Student } from '../../domain/student';
import { SqlClient } from '../../../../shared/infraestructure/persistence/prisma.service';
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
            console.error('Error creating student:', error);
            throw new Error('Error creating student');
        }
    }
}
