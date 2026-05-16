import type { StudentMapper } from "@/main/features/student/infraestructure/adapter/student.mapper";
import type { StudentService } from "@/main/features/student/application/service/student.service.i";
import type { Request, Response } from "express-serve-static-core";
import { HttpResponse } from "@/main/shared/infraestructure/http/http-response/http-response";


export class StudentControllerRest {

    private readonly service : StudentService;
    private readonly mapper : StudentMapper;

    constructor(service : StudentService, mapper : StudentMapper) {
        this.service = service;
        this.mapper = mapper;
    }

    post = async (req : Request, res : Response) => {    

        const student = this.mapper.dtoToModel(req.body);
        const addedStudent = await this.service.income(student);
        const studentDtoResponse = this.mapper.modelToDto(addedStudent);
        return HttpResponse.CREATE(res, studentDtoResponse);
    }
}