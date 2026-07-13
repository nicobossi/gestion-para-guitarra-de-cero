import {
    Body,
    Controller,
    Get,
    HttpCode,
    Post,
    UseFilters,
} from '@nestjs/common';
import { FeeService } from '../application/fee.service';
import { FeeMapper } from '../infraestructure/dto/create-fee/mapper';
import { CreateFee } from '../infraestructure/dto/create-fee/request';
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

    @Get('prices')
    @HttpCode(200)
    async prices() {
        return await this.feeService.getAmounts();
    }
}
