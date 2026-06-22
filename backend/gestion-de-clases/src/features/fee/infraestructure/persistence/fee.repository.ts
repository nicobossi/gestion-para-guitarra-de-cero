import { Injectable } from '@nestjs/common';
import { Fee } from '../../domain/fee';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { FeeMapper } from '../mapper/fee.mapper';
import { Price } from '../../domain/types/price';

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
            select: { amount: true },
        });
        return amounts;
    }
}
