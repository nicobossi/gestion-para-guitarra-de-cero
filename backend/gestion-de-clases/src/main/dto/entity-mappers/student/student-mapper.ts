import { Student } from "@/main/domain/student/student";
import type { Alumno } from "resources/generated/prisma/client";
import type { AlumnoCreateInput } from "resources/generated/prisma/models";




export class StudentEntityMapper {

    toSql(student : Student) : AlumnoCreateInput {
        return {
            firstName: student.getName,
            secondName: student.getSecondName ? student.getSecondName : null,
            surname: student.getSurname,
            phone: student.getPhoneNumber, 
            submissionDate: student.getSubmissionDate
        }
    }

    toModel(addedStudent : Alumno) : Student {
        return new Student(
            addedStudent.firstName,
            addedStudent.surname,
            addedStudent.phone, 
            addedStudent.submissionDate,
            addedStudent.secondName ? addedStudent.secondName : undefined,
            addedStudent.id
        )
    } 
}