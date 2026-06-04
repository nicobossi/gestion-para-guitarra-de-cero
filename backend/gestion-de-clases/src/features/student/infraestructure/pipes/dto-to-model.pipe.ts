import { Injectable } from '@nestjs/common';
import { DtoToModelPipe } from '../../../../shared/infraestructure/pipes/dto-to-model/dto-to-model.pipe';
import { CreateStudent } from '../mapper/dtos/request/create-student-request';
import { Student } from '../../domain/student';
import { plainToInstance } from 'class-transformer';
import { StudentMapper } from '../mapper/student.mapper';

@Injectable()
export class DtoToStudentPipe extends DtoToModelPipe<CreateStudent, Student> {
    protected dto(value: CreateStudent): CreateStudent {
        return plainToInstance(CreateStudent, value);
    }
    protected model(value: CreateStudent) {
        return StudentMapper.dtoToModel(value);
    }
}
