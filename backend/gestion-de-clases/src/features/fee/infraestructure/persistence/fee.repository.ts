import { Injectable } from '@nestjs/common';
import { Fee } from '../../domain/fee';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { FeeMapper } from '../mapper/fee.mapper';

@Injectable()
export class FeeRepository {
    constructor(private readonly sql: SqlClient) {}

    async add(fee: Fee): Promise<Fee> {
        return await this.sql.execute(() => this.save(fee));
    }

    private async save(fee: Fee): Promise<Fee> {
        const dto = FeeMapper.modelToSql(fee);
        const createdFee = await this.sql.fee.create({ data: dto });
        return FeeMapper.sqlToModel(createdFee);
    }
}
