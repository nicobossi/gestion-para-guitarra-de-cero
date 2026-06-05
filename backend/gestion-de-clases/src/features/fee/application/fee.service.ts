import { Injectable } from '@nestjs/common';
import { Fee } from '../domain/fee';
import { RepeatEntityException } from '../../../shared/infraestructure/persistence/errors/repeat-entity-exception';
import { FeeRepository } from '../infraestructure/persistence/fee.repository';

@Injectable()
export class FeeService {
    constructor(private readonly repository: FeeRepository) {}
    async add(fee: Fee): Promise<Fee> {
        try {
            return await this.repository.add(fee);
        } catch (error) {
            if (error instanceof RepeatEntityException) {
                throw fee.repeatAmountException();
            } else throw error;
        }
    }
}
