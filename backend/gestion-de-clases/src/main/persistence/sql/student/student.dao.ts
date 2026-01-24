import type { Student } from "@/main/domain/student/student";
import type { StudentMapper } from "@/main/dto/student/student.mapper";
import type { Alumno, PrismaClient } from "resources/generated/prisma/client";
import type { StudentDao as StudentDao } from "./student.dao.i";
import { HandlerPrismaError } from "../handler-exception/handler-exception";


export class StudentDaoImpl implements StudentDao {

    private readonly client : PrismaClient;
    private readonly mapper : StudentMapper;
    private readonly handlerError : HandlerPrismaError;

    constructor(client : PrismaClient, mapper : StudentMapper) {
        this.client = client;
        this.mapper = mapper;
        this.handlerError = new HandlerPrismaError();
    }
    
    async save(student : Student) : Promise<Student> {        
        
        try {
            const addedStudent = await this.add(student);
            return this.mapper.toModel(addedStudent);
        }
        catch(error : unknown) {
            throw this.handlerError.handleCreateError(error);
        }
    }

    private async add(student : Student) : Promise<Alumno> {
        return await this.client.alumno.create({
            data: this.mapper.toSql(student)
        });
    }
}