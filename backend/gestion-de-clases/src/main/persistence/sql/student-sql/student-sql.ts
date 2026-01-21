import type { Student } from "@/main/domain/student/student";
import type { StudentEntityMapper } from "@/main/dto/entity-mappers/student/student-mapper";
import type { Alumno, PrismaClient } from "resources/generated/prisma/client";


export class StudentDao {

    private readonly client : PrismaClient;
    private readonly mapper : StudentEntityMapper;

    constructor(client : PrismaClient, mapper : StudentEntityMapper) {
        this.client = client;
        this.mapper = mapper
    }
    
    async save(student : Student) : Promise<Student> {        
        
        const addedStudent = await this.add(student);
        return this.mapper.toModel(addedStudent);
    }


    private async add(student : Student) : Promise<Alumno> {
        return await this.client.alumno.create({
            data: this.mapper.toSql(student)
            }
        );
    }
}