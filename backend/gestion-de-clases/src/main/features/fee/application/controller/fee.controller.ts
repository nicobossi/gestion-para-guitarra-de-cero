import type { Request, Response } from "express";
import type { FeeService } from "../service/fee.service.i";
import type { FeeMapper } from "../../infraestructure/adapter/fee.mapper";
import { HttpResponse } from "@/main/shared/infraestructure/http/http-response/http-response";



export class FeeController {

    private readonly service : FeeService;
    private readonly mapper : FeeMapper;

    constructor(service : FeeService, mapper : FeeMapper) {
        this.service = service;
        this.mapper = mapper;
    }

    post = async (req : Request, res : Response) => {
        const fee = this.mapper.dtoToModel(req.body);
        const addedFee = await this.service.save(fee);
        const feeDtoResponse = this.mapper.modelToDto(addedFee);
        return HttpResponse.CREATE(res, feeDtoResponse);
    }
}