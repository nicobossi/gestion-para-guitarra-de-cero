import { StudentCreateInput } from '../../../../../generated/prisma/models';
import { Student } from '../../domain/student';
import { StudentResponseDto } from './dtos/response/student-response';

export class StudentMapper {
    static sqlToModel(sqlStudent: StudentCreateInput): Student {
        return new Student(
            sqlStudent.firstName,
            sqlStudent.surname,
            sqlStudent.phone,
            new Date(sqlStudent.submissionDate),
            sqlStudent.secondName ?? undefined,
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
