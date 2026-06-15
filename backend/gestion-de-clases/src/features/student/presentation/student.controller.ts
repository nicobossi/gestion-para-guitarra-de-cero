import { Body, Controller, HttpCode, Post, UseFilters } from '@nestjs/common';
import { StudentService } from '../application/student.service';
import { CreateStudent } from '../infraestructure/mapper/dtos/request/create-student-request';
import { StudentMapper } from '../infraestructure/mapper/student.mapper';
import { RepeatFieldException } from '../../../shared/infraestructure/persistence/errors/repeat-field-exception';

@Controller('api/student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @UseFilters(RepeatFieldException)
    @Post('income')
    @HttpCode(201)
    async income(@Body() dto: CreateStudent) {
        const student = StudentMapper.dtoToModel(dto);
        const createdStudent = await this.studentService.income(student);
        return StudentMapper.modelToDto(createdStudent);
    }
}
