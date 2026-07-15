import {
    StudentCreateInput,
    StudentModel,
} from '../../../../../../generated/prisma/models';
import { Student } from '../../../domain/student/student';
import { CreateStudent } from './request';
import { CreateStudentResponse } from './response';

export class IncomeStudent {
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
            submissionDate: student.getFirstLessonDate,
        };
    }

    static dtoToModel(dto: CreateStudent): Student {
        return new Student(
            dto.name,
            dto.surname,
            dto.phone,
            new Date(dto.submissionDate),
            dto.secondName,
        );
    }

    static modelToDto(student: Student): CreateStudentResponse {
        return {
            id: student.getId!,
            name: student.getName,
            surname: student.getSurname,
            secondName: student.getSecondName,
            phone: student.getPhoneNumber,
            submissionDate: student.getFirstLessonDate,
        };
    }
}
