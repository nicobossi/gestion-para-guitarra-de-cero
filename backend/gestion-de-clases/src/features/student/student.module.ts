import { Module } from '@nestjs/common';
import { StudentService } from './application/student.service';
import { StudentRepository } from './infraestructure/persistence/student.repository';
import { StudentController } from './infraestructure/controller/student.controller';
import { StudentMapper } from './infraestructure/mapper/student.mapper';

@Module({
    controllers: [StudentController],
    providers: [StudentService, StudentRepository, StudentMapper],
})
export class StudentModule {}
