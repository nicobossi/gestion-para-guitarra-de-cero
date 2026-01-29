import type { Lesson } from "@/main/features/lesson/domain/lesson";
import type { LessonSqlDao } from "./lesson.dao.i";
import type { PrismaClient } from "resources/generated/prisma/client";
import type { LessonMapper } from "@/main/features/lesson/infraestructure/dtos/lesson.mapper";
import { HandlerPrismaError } from "../../../../../shared/infraestructure/persistence/sql/prisma/handler-error";



export class LessonSqlDaoImpl implements LessonSqlDao {

    private readonly client : PrismaClient;
    private readonly mapper : LessonMapper;
    private readonly handlerError : HandlerPrismaError;

    constructor(client : PrismaClient, mapper : LessonMapper) {
        this.client = client;
        this.mapper = mapper;
        this.handlerError = new HandlerPrismaError();
    }
    
    saveMany(lessons : Lesson[]): Lesson[] {
        throw new Error("Method not implemented.");
    }
    
}