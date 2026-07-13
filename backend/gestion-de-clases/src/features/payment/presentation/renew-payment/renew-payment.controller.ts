import { Controller, HttpCode, Post } from '@nestjs/common';
import { RenewPaymentOrchestrator } from '../../application/orchestrator/payment.orchestrator';
import { AddPayment } from '../../infraestructure/dtos/add-payment/mapper';
import { RenewPayment } from '../../infraestructure/dtos/add-payment/request';

@Controller('api/payment')
export class RenewPaymentController {
    constructor(private readonly renewOrchestrator: RenewPaymentOrchestrator) {}

    @Post('renew')
    @HttpCode(201)
    async renewPayment(dto: RenewPayment) {
        const payment = AddPayment.dtoToModel(dto);
        const renewedPayment = await this.renewOrchestrator.execute(payment);
        return AddPayment.modelToDto(renewedPayment);
    }
}
