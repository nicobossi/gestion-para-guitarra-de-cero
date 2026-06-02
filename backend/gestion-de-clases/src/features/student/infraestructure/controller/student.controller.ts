import { Body, Controller, HttpCode, Post, UseFilters } from '@nestjs/common';
import { StudentService } from '../../application/student.service';
import { StudentMapper } from '../mapper/student.mapper';
import { CreateStudent } from '../mapper/dtos/request/create-student-request';
import { RepeatPhoneFilter } from '../exception-filters/repeat-phone/repeat-phone.filter';

@Controller('api/student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @UseFilters(RepeatPhoneFilter)
    @Post('income')
    @HttpCode(201)
    async income(@Body() studentDto: CreateStudent) {
        const student = StudentMapper.dtoToModel(studentDto);
        return StudentMapper.modelToDto(
            await this.studentService.income(student),
        );
    }
}
