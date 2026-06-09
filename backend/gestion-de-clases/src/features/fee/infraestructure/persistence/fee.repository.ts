import { Injectable } from '@nestjs/common';
import { Fee } from '../../domain/fee';
import { SqlClient } from '../../../../shared/infraestructure/persistence/sql/prisma.service';
import { FeeMapper } from '../mapper/fee.mapper';

@Injectable()
export class FeeRepository {
    constructor(private readonly sql: SqlClient) {}

    async add(fee: Fee): Promise<Fee> {
        try {
            const createdFee = await this.sql.fee.create({
                data: FeeMapper.modelToSql(fee),
            });
            return FeeMapper.sqlToModel(createdFee);
        } catch (error: unknown) {
            throw this.sql.handleError(error);
        }
    }

    async clearAll(): Promise<void> {
        try {
            await this.sql.fee.deleteMany();
        } catch (error: unknown) {
            throw this.sql.handleError(error);
        }
    }
}
