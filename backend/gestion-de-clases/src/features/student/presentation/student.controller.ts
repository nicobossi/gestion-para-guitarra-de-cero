import { Body, Controller, HttpCode, Post, UseFilters } from '@nestjs/common';
import { StudentService } from '../application/student.service';
import { RepeatPhoneFilter } from '../infraestructure/exception-filters/repeat-phone/repeat-phone.filter';
import { CreateStudent } from '../infraestructure/mapper/dtos/request/create-student-request';
import { StudentMapper } from '../infraestructure/mapper/student.mapper';

@Controller('api/student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @UseFilters(RepeatPhoneFilter)
    @Post('income')
    @HttpCode(201)
    async income(@Body() dto: CreateStudent) {
        const student = StudentMapper.dtoToModel(dto);
        const createdStudent = await this.studentService.income(student);
        return StudentMapper.modelToDto(createdStudent);
    }
}
