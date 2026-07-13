import { Body, Controller, HttpCode, Post, UseFilters } from '@nestjs/common';
import { RenewPaymentOrchestrator } from '../../application/orchestrator/payment.orchestrator';
import { AddPayment } from '../../infraestructure/dtos/add-payment/mapper';
import { RenewPayment } from '../../infraestructure/dtos/add-payment/request';
import { StudentsWithSameFullnameFilter } from '../../infraestructure/exception-filters/students-with-same-fullname-filter.filter';

@Controller('api/payment')
export class RenewPaymentController {
    constructor(private readonly renewOrchestrator: RenewPaymentOrchestrator) {}

    @Post('renew')
    @HttpCode(201)
    @UseFilters(StudentsWithSameFullnameFilter)
    async renewPayment(@Body() dto: RenewPayment) {
        const payment = AddPayment.dtoToModel(dto);
        const renewedPayment = await this.renewOrchestrator.execute(payment);
        return AddPayment.modelToDto(renewedPayment);
    }
}
