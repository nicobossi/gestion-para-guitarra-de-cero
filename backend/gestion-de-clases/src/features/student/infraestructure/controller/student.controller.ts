import {
    Body,
    Controller,
    HttpCode,
    Post,
    UseFilters,
    UsePipes,
} from '@nestjs/common';
import { StudentService } from '../../application/student.service';
import { StudentMapper } from '../mapper/student.mapper';
import { RepeatPhoneFilter } from '../exception-filters/repeat-phone/repeat-phone.filter';
import { Student } from '../../domain/student';
import { DtoToStudentPipe } from '../pipes/dto-to-model.pipe';

@Controller('api/student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @UsePipes(DtoToStudentPipe)
    @UseFilters(RepeatPhoneFilter)
    @Post('income')
    @HttpCode(201)
    async income(@Body() student: Student) {
        return StudentMapper.modelToDto(
            await this.studentService.income(student),
        );
    }
}
