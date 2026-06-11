import { Injectable } from '@nestjs/common';
import { Fee } from '../domain/fee';
import { FeeRepository } from '../infraestructure/persistence/fee.repository';

@Injectable()
export class FeeService {
    constructor(private readonly repository: FeeRepository) {}
    async add(fee: Fee): Promise<Fee> {
        return await this.repository.add(fee);
    }
}
