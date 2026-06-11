import { Injectable } from '@nestjs/common';
import { Fee } from '../../domain/fee';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { FeeMapper } from '../mapper/fee.mapper';
import { RepeatFieldException } from '../../../../shared/infraestructure/persistence/errors/repeat-field-exception';

@Injectable()
export class FeeRepository {
    constructor(private readonly sql: SqlClient) {}

    async add(fee: Fee): Promise<Fee> {
        try {
            return await this.sql.execute(() => this.save(fee));
        } catch (error) {
            if (error instanceof RepeatFieldException) {
                throw fee.repeatAmountException();
            } else throw error;
        }
    }

    private async save(fee: Fee): Promise<Fee> {
        const dto = FeeMapper.modelToSql(fee);
        const createdFee = await this.sql.fee.create({ data: dto });
        return FeeMapper.sqlToModel(createdFee);
    }
}
