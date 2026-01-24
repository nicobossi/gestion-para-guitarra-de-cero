import type { Student } from "@/main/domain/student/student";
import type { StudentMapper } from "@/main/dto/student/student.mapper";
import type { StudentResponseDto } from "@/main/dto/student/types/response.dto";
import type { StudentService } from "@/main/service/student/student.service.i";
import type { Request, Response } from "express-serve-static-core";
import type { HttpResponse } from "../http-response";

export class StudentController {

    private readonly service : StudentService;
    private readonly mapper : StudentMapper;
    private readonly httpResponse : HttpResponse;

    constructor(service : StudentService, mapper : StudentMapper, httpResponse : HttpResponse) {
        this.service = service;
        this.mapper = mapper;
        this.httpResponse = httpResponse;
    }

    async post(req : Request, res : Response) {        
        try {
            const student : Student = this.mapper.dtoToModel(req.body);
            const addedStudent : Student = await this.service.income(student);
            const studentDtoResponse : StudentResponseDto = this.mapper.modelToDto(addedStudent);
            return this.httpResponse.CREATE<StudentResponseDto>(res, studentDtoResponse);
        }
        catch(error : unknown) {  
            return this.httpResponse.BAD_REQUEST<{message : string}>(res, {
                message: "El teléfono enviado ya se encuentra registrado"
            });
        }
    }
}