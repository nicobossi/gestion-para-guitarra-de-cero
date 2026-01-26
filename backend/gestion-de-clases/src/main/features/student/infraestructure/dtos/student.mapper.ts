import type { Alumno } from "resources/generated/prisma/client";
import type { AlumnoCreateInput } from "resources/generated/prisma/models";
import type { StudentResponseDto } from "./response.dto";
import { Student } from "@/main/features/student/domain/student";
import type { StudentRequestDto } from "./request.dto";


export class StudentMapper {

    toSql(student : Student) : AlumnoCreateInput {
        return {
            firstName: student.getName,
            secondName: student.getSecondName ? student.getSecondName : null,
            surname: student.getSurname,
            phone: student.getPhoneNumber, 
            submissionDate: student.getSubmissionDate.toISOString()
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

        return new Student(
            studentRequest.name,
            studentRequest.surname,
            Number.parseInt(studentRequest.phone),
            studentRequest.submissionDate,
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