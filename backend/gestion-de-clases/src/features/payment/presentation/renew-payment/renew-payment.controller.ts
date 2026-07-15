import {
    Body,
    Controller,
    HttpCode,
    Param,
    Post,
    UseFilters,
} from '@nestjs/common';
import { RenewPaymentOrchestrator } from '../../application/orchestrator/payment.orchestrator';
import { AddPayment } from '../../infraestructure/dtos/add-payment/mapper';
import { RenewPayment } from '../../infraestructure/dtos/add-payment/request';
import { StudentsWithSameFullnameFilter } from '../../infraestructure/exception-filters/students-with-same-fullname-filter.filter';
import { StudentNotFoundFilter } from '../../infraestructure/exception-filters/student-not-found.filter';

@Controller('api/payment')
export class RenewPaymentController {
    constructor(private readonly renewOrchestrator: RenewPaymentOrchestrator) {}

    @Post('renew')
    @HttpCode(201)
    @UseFilters(StudentsWithSameFullnameFilter, StudentNotFoundFilter)
    async renewPayment(@Body() dto: RenewPayment) {
        const payment = AddPayment.dtoToModel(dto);
        const renewedPayment = await this.renewOrchestrator.execute(payment);
        return AddPayment.modelToDto(renewedPayment);
    }

    @Post('reintent/:phone')
    @HttpCode(201)
    async reintent(
        @Body() dto: RenewPayment,
        @Param('phone') phoneNumber: string,
    ) {
        const payment = AddPayment.dtoToModel(dto);
        const renewedPayment = await this.renewOrchestrator.reintent(
            payment,
            phoneNumber,
        );
        return AddPayment.modelToDto(renewedPayment);
    }
}
