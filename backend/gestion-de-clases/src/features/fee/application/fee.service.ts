import { Injectable } from '@nestjs/common';
import { Fee } from '../domain/fee';
import { FeeRepository } from '../infraestructure/persistence/fee.repository';
import { UnitOfWork } from '../../../shared/infraestructure/persistence/sql/unit-of-work.service';
import { Price } from '../domain/types/price';
import { PaymentFee } from '../../../shared/application/payment-fee';

@Injectable()
export class FeeService implements PaymentFee {
    constructor(
        private readonly repository: FeeRepository,
        private readonly unitOfWork: UnitOfWork,
    ) {}
    add(fee: Fee): Promise<Fee> {
        const addFee = () => this.repository.add(fee);
        return this.unitOfWork.execute(addFee);
    }
    getAmounts(): Promise<Price[]> {
        const amounts = () => this.repository.getAmounts();
        return this.unitOfWork.execute(amounts);
    }
    getWithAmount(amount: number): Promise<Fee> {
        const getWithName = () => this.repository.getWithAmount(amount);
        return this.unitOfWork.execute(getWithName);
    }
}
