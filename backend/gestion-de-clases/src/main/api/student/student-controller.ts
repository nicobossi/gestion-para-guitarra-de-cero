import type { Student } from "@/main/domain/student/student";
import type { StudentMapper } from "@/main/dto/student/student-mapper";
import type { StudentRequestDto } from "@/main/dto/student/types/request-dto";
import type { StudentResponseDto } from "@/main/dto/student/types/response.dto";
import type { StudentService } from "@/main/service/student/student-service.i";
import type { NextFunction, RequestHandler } from "express";
import type { Request, Response } from "express-serve-static-core";
import { ObjectSchema, ValidationError, type AnyObject, type Maybe } from "yup";

export class StudentController {

    private readonly service : StudentService;
    private readonly mapper : StudentMapper;

    constructor(service : StudentService, mapper : StudentMapper) {
        this.service = service;
        this.mapper = mapper;
    }

    async post(req : Request<StudentRequestDto>, res : Response<StudentResponseDto | {message : string}>) {        
        try {
            const student : Student = this.mapper.dtoToModel(req.body);
            const addedStudent : Student = await this.service.income(student);
            return res.status(201).json(this.mapper.modelToDto(addedStudent));
        }
        catch(error : unknown) {  
            return res.status(400).send({
                message: "El telefono enviado ya se encuentra registrado"
            });
        }
    }

    validateBody<T extends Maybe<AnyObject>>(studentSchema : ObjectSchema<T>) : RequestHandler {
        return async (req : Request, res : Response, next : NextFunction) => {
            try {
                await studentSchema.validate(req.body);
                next();
            }
            catch(error : unknown) {
                if(error instanceof ValidationError) {
                    return res.status(400).json({
                        message: error.message
                    })
                }
                else {
                    return res.status(400).json({
                        message: "Error desconocido"
                    })
                }
            }
        }
    }
}