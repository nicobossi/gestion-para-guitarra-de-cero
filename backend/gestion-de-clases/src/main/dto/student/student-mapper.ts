import { Student } from "@/main/domain/student/student";
import type { Alumno } from "resources/generated/prisma/client";
import type { AlumnoCreateInput } from "resources/generated/prisma/models";
import type { StudentRequestDto } from "./types/request-dto";
import type { StudentResponseDto } from "./types/response.dto";


export class StudentMapper {

    toSql(student : Student) : AlumnoCreateInput {
        return {
            firstName: student.getName,
            secondName: student.getSecondName ? student.getSecondName : null,
            surname: student.getSurname,
            phone: student.getPhoneNumber, 
            submissionDate: student.getSubmissionDate
        }
    }

    toModel(student : Alumno) : Student {
        return new Student(
            student.firstName,
            student.surname,
            student.phone, 
            student.submissionDate,
            student.secondName ? student.secondName : undefined,
            student.id
        )
    } 

    dtoToModel(studentRequest : StudentRequestDto) : Student {

        const submissionDate = new Date(studentRequest.submissionDate);

        if (isNaN(submissionDate.getTime())) throw new Error('Invalid date format')
        // instalar yup para no hacer esta asquerosidad

        return new Student(
            studentRequest.name,
            studentRequest.surname,
            Number.parseInt(studentRequest.phone),
            submissionDate,
            studentRequest.secondName
        )
    }

    modelToDto(student : Student) : StudentResponseDto {
        return {
            id: student.getId,
            name: student.getName,
            secondName: student.getSecondName,
            surname: student.getSurname,
            phone: student.getPhoneNumber.toString(), 
            submissionDate: student.getSubmissionDate
        }
    }
}