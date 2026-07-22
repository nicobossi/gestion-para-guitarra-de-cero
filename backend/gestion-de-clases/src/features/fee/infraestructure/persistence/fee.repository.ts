import { Injectable } from '@nestjs/common';
import { Fee } from '../../domain/fee';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { FeeMapper } from '../dto/create-fee/mapper';
import { Price } from '../../../../shared/domain/entities/price';

@Injectable()
export class FeeRepository {
    constructor(private readonly sql: SqlClient) {}

    async add(fee: Fee): Promise<Fee> {
        const dto = FeeMapper.modelToSql(fee);
        const createdFee = await this.sql.fee.create({ data: dto });
        return FeeMapper.sqlToModel(createdFee);
    }

    async getAmounts(): Promise<Price[]> {
        const amounts = await this.sql.fee.findMany({
            select: {
                id: true,
                amount: true,
            },
        });
        return amounts;
    }

    async getWithAmount(amount: number): Promise<Fee> {
        const fee = await this.sql.fee.findUniqueOrThrow({
            where: { amount: amount },
        });
        return FeeMapper.sqlToModel(fee);
    }
}
