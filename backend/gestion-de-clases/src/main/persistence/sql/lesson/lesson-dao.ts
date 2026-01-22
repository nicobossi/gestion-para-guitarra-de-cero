import type { Lesson } from "@/main/domain/lesson/lesson";
import type { LessonSqlDao } from "./lesson-dao.i";
import type { PrismaClient } from "resources/generated/prisma/client";
import type { LessonMapper } from "@/main/dto/lesson/lesson-mapper";



export class LessonSqlDaoImpl implements LessonSqlDao {

    private readonly client : PrismaClient;
    private readonly mapper : LessonMapper;

    constructor(client : PrismaClient, mapper : LessonMapper) {
        this.client = client;
        this.mapper = mapper;
    }
    
    save(lesson : Lesson): Lesson {
        throw new Error("Method not implemented.");
    }
    
}