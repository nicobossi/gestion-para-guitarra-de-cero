import type { Student } from "@/main/domain/student/student";
import type { StudentMapper } from "@/main/dto/student/student-mapper";
import type { StudentService } from "@/main/service/student/student-service.i";
import type { Request, Response } from "express-serve-static-core";



export class StudentController {

    private service : StudentService;
    private mapper : StudentMapper;

    constructor(service : StudentService, mapper : StudentMapper) {
        this.service = service;
        this.mapper = mapper;
    }

    async post(req : Request, res: Response) {        
        try {
            const student : Student = this.mapper.dtoToModel(req.body);
            const addedStudent : Student = await this.service.income(student);
            return res.status(201).json(this.mapper.modelToDto(addedStudent));
        }
        catch(error : unknown) {  
            return res.status(400).send({
                message: "El alumno ya se encuentra registrado"
            });
        }
    }
}