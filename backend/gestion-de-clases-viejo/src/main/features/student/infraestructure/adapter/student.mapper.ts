import type { StudentCreateInput } from "resources/generated/prisma/models";
import type { StudentResponseDto } from "./response.dto";
import { Student } from "@/main/features/student/domain/student";
import type { StudentRequestDto } from "./request.dto";
import type { StudentPrisma } from "@/main/shared/infraestructure/persistence/sql/prisma/types";


export class StudentMapper {

    toSql(student : Student) : StudentCreateInput {
        return {
            firstName: student.getName,
            secondName: student.getSecondName,
            surname: student.getSurname,
            phone: student.getPhoneNumber, 
            submissionDate: student.getSubmissionDate
        }
    }

    toModel(student : StudentPrisma) : Student {
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
            new Date(studentRequest.submissionDate),
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
            submissionDate: student.getSubmissionDate.toString()
        }
    }
}