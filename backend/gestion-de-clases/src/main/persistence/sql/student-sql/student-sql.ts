import type { Student } from "@/main/domain/student/student";
import type { StudentEntityMapper } from "@/main/dto/entity-mappers/student/student-mapper";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import type { Alumno, PrismaClient } from "resources/generated/prisma/client";
import { RepeatEntityException } from "../repeat-entity-exception";


export class StudentDao {

    private readonly client : PrismaClient;
    private readonly mapper : StudentEntityMapper;

    constructor(client : PrismaClient, mapper : StudentEntityMapper) {
        this.client = client;
        this.mapper = mapper
    }
    
    async save(student : Student) : Promise<Student> {        
        
        try {
            const addedStudent = await this.add(student);
            return this.mapper.toModel(addedStudent);
        }
        catch(error : unknown) {
            throw this.handleError(error, student);
        }
    }

    private handleError(error : unknown, student : Student) {
        
        if(error instanceof PrismaClientKnownRequestError) {
            if(error.code === 'P2002') return new RepeatEntityException(this.errorMessage(student));
        }
    }

    private errorMessage(student : Student): string {
        return "el estudiante con el id " + student.getId + " ya se encuentra registrado" ;
    }


    private async add(student : Student) : Promise<Alumno> {
        return await this.client.alumno.create({
            data: this.mapper.toSql(student)
            }
        );
    }
}