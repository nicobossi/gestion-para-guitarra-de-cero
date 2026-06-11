import { Injectable } from '@nestjs/common';
import { Student } from '../../domain/student';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { StudentMapper } from '../mapper/student.mapper';
import { RepeatFieldException } from '../../../../shared/infraestructure/persistence/errors/repeat-field-exception';

@Injectable()
export class StudentRepository {
    constructor(private readonly sql: SqlClient) {}

    async income(student: Student): Promise<Student> {
        try {
            return await this.sql.execute(() => this.save(student));
        } catch (error) {
            if (error instanceof RepeatFieldException) {
                throw student.repeatPhoneException();
            }
            throw error;
        }
    }

    private async save(student: Student): Promise<Student> {
        const dto = StudentMapper.modelToSql(student);
        const createdStudent = await this.sql.student.create({ data: dto });
        return StudentMapper.sqlToModel(createdStudent);
    }
}
