import { Body, Controller, HttpCode, Post, UseFilters } from '@nestjs/common';
import { StudentService } from '../application/student.service';
import { RepeatPhoneFilter } from '../infraestructure/exception-filters/repeat-phone/repeat-phone.filter';
import { CreateStudent } from '../infraestructure/dtos/income/create-student-request';
import { IncomeStudent } from '../infraestructure/dtos/income/income-student.mapper';

@Controller('api/student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @UseFilters(RepeatPhoneFilter)
    @Post('income')
    @HttpCode(201)
    async income(@Body() dto: CreateStudent) {
        const student = IncomeStudent.dtoToModel(dto);
        const createdStudent = await this.studentService.income(student);
        return IncomeStudent.modelToDto(createdStudent);
    }
}
