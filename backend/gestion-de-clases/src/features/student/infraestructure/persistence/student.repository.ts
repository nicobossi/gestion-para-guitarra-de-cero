import { Injectable } from '@nestjs/common';
import { Student } from '../../domain/student';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { StudentMapper } from '../mapper/student.mapper';

@Injectable()
export class StudentRepository {
    constructor(private readonly sql: SqlClient) {}

    async income(student: Student): Promise<Student> {
        return await this.sql.execute(() => this.save(student));
    }

    private async save(student: Student): Promise<Student> {
        const dto = StudentMapper.modelToSql(student);
        const createdStudent = await this.sql.student.create({ data: dto });
        return StudentMapper.sqlToModel(createdStudent);
    }
}
