import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { StudentService } from '../../application/student.service';
import { StudentMapper } from '../mapper/student.mapper';
import { CreateStudent } from '../mapper/dtos/request/create-student-request';

@Controller('api/student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Post('income')
    @HttpCode(201)
    async incomeStudent(@Body() studentDto: CreateStudent) {
        const student = StudentMapper.dtoToModel(studentDto);
        return StudentMapper.modelToDto(
            await this.studentService.incomeStudent(student),
        );
    }
}
