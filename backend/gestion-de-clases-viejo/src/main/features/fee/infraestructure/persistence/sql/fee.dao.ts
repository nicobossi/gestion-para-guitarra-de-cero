import type { PrismaClient } from "resources/generated/prisma/client";
import type { FeeDao } from "./fee.dao.i";
import type { HandlerPrismaError } from "@/main/shared/infraestructure/persistence/sql/prisma/handler-error";
import type { Fee } from "../../../domain/fee";
import type { FeePrisma } from "@/main/shared/infraestructure/persistence/sql/prisma/types";
import type { FeeMapper } from "../../adapter/fee.mapper";


export class FeeDaoImpl implements FeeDao {

    private readonly client : PrismaClient;
    private readonly mapper : FeeMapper;
    private readonly handlerError : HandlerPrismaError;

    constructor(client : PrismaClient, mapper : FeeMapper, handlerError : HandlerPrismaError) {
        this.client = client;
        this.mapper = mapper;
        this.handlerError = handlerError;
    }

    async save(fee: Fee) : Promise<Fee> {
        try {
            const addedFee : FeePrisma = await this.add(fee);
            return this.mapper.toModel(addedFee);
        }
        catch(error : unknown) {
            throw this.handlerError.handle(error);
        }
    }

    private async add(fee: Fee) : Promise<FeePrisma> {
        return await this.client.fee.create({
            data: this.mapper.toSql(fee)
        })
    }
}