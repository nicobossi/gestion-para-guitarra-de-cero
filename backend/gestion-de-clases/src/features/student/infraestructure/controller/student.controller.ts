import { Controller, HttpCode, Post } from '@nestjs/common';
import { StudentService } from '../../application/student.service';
import { Student } from '../../domain/student';
import { StudentMapper } from '../mapper/student.mapper';

@Controller('api/student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Post('income')
    @HttpCode(201)
    async incomeStudent(student: Student) {
        return StudentMapper.modelToDto(
            await this.studentService.incomeStudent(student),
        );
    }
}
