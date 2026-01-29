import type { StudentMapper } from "@/main/features/student/infraestructure/dtos/student.mapper";
import type { Alumno, PrismaClient } from "resources/generated/prisma/client";
import type { StudentDao as StudentDao } from "./student.dao.i";
import type { Student } from "@/main/features/student/domain/student";
import type { HandlerPrismaError } from "@/main/shared/infraestructure/persistence/sql/prisma/handler-error";


export class StudentDaoImpl implements StudentDao {

    private readonly client : PrismaClient;
    private readonly mapper : StudentMapper;
    private readonly handlerError : HandlerPrismaError;

    constructor(client : PrismaClient, mapper : StudentMapper, handlerError : HandlerPrismaError) {
        this.client = client;
        this.mapper = mapper;
        this.handlerError = handlerError;
    }
    
    async save(student : Student) : Promise<Student> {        
        try {
            const addedStudent = await this.add(student);
            return this.mapper.toModel(addedStudent);
        }
        catch(error : unknown) {
            throw this.handlerError.handle(error);
        }
    }

    private async add(student : Student) : Promise<Alumno> {
        return await this.client.alumno.create({
            data: this.mapper.toSql(student)
        });
    }
}