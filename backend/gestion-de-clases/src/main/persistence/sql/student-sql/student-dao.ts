import type { Student } from "@/main/domain/student/student";
import type { StudentEntityMapper } from "@/main/dto/entity-mappers/student/student-mapper";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import type { Alumno, PrismaClient } from "resources/generated/prisma/client";
import { RepeatEntityException } from "../repeat-entity-exception";
import type { StudentDao as StudentDao } from "./student-dao.i";


export class StudentDaoImpl implements StudentDao {

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
            throw this.handleError(error);
        }
    }

    private handleError(error : unknown) : Error | undefined {
        
        if(error instanceof PrismaClientKnownRequestError) {
            if(error.code === 'P2002') return new RepeatEntityException(error.message);
        }
        else {
            return new Error("Hubo un error desconocido");
        }
    }

    private async add(student : Student) : Promise<Alumno> {
        return await this.client.alumno.create({
            data: this.mapper.toSql(student)
        });
    }
}