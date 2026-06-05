import { Body, Controller, HttpCode, Post, UseFilters } from '@nestjs/common';
import { FeeService } from '../application/fee.service';
import { FeeMapper } from '../infraestructure/mapper/fee.mapper';
import { CreateFee } from '../infraestructure/mapper/dto/request/create-fee';
import { RepeatAmountFilter } from '../infraestructure/exception-filter/repeat-amount.filter';

@Controller('api/fee')
export class FeeController {
    constructor(private readonly feeService: FeeService) {}

    @UseFilters(RepeatAmountFilter)
    @Post('add')
    @HttpCode(201)
    async add(@Body() dto: CreateFee) {
        const fee = FeeMapper.dtoToModel(dto);
        const createdFee = await this.feeService.add(fee);
        return FeeMapper.modelToDto(createdFee);
    }
}
