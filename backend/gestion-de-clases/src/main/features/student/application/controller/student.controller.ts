import type { StudentMapper } from "@/main/features/student/infraestructure/dtos/student.mapper";
import type { StudentResponseDto } from "@/main/features/student/infraestructure/dtos/response.dto";
import type { StudentService } from "@/main/features/student/application/service/student.service.i";
import type { Request, Response } from "express-serve-static-core";
import { ManyPhoneException } from "@/main/features/student/domain/many-phone-exception";
import type { Student } from "@/main/features/student/domain/student";
import type { HttpResponse } from "@/main/shared/infraestructure/http/http-response/http-response";

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
            if(error instanceof ManyPhoneException) return this.httpResponse.BAD_REQUEST<{message : string}>(res, {
                message: "El teléfono enviado ya se encuentra registrado"
            });
            else throw error;
        }
    }
}