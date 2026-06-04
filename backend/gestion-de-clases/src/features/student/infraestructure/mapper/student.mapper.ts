import {
    StudentCreateInput,
    StudentModel,
} from '../../../../../generated/prisma/models';
import { Student } from '../../domain/student';
import { CreateStudent } from './dtos/request/create-student-request';
import { StudentResponseDto } from './dtos/response/student-response';

export class StudentMapper {
    static sqlToModel(sqlStudent: StudentModel): Student {
        return new Student(
            sqlStudent.firstName,
            sqlStudent.surname,
            sqlStudent.phone,
            new Date(sqlStudent.submissionDate),
            sqlStudent.secondName ?? undefined,
            sqlStudent.id,
        );
    }

    static modelToSql(student: Student): StudentCreateInput {
        return {
            firstName: student.getName,
            surname: student.getSurname,
            secondName: student.getSecondName,
            phone: student.getPhoneNumber,
            submissionDate: student.getSubmissionDate,
        };
    }

    static dtoToModel(dto: CreateStudent): Student {
        return new Student(
            dto.name,
            dto.surname,
            parseInt(dto.phone),
            new Date(dto.submissionDate),
            dto.secondName ?? undefined,
        );
    }

    static modelToDto(student: Student): StudentResponseDto {
        return {
            id: student.getId!,
            name: student.getName,
            surname: student.getSurname,
            secondName: student.getSecondName,
            phone: student.getPhoneNumber,
            submissionDate: student.getSubmissionDate,
        };
    }
}
