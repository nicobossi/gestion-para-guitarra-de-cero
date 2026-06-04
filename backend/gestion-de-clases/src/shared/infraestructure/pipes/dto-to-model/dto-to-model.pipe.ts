import { BadRequestException, PipeTransform } from '@nestjs/common';
import { validateSync } from 'class-validator';

export abstract class DtoToModelPipe<
    D extends object,
    M,
> implements PipeTransform<D, M> {
    transform(value: D) {
        const dto = this.dto(value);
        const errors = validateSync(dto);
        if (errors.length > 0) {
            throw new BadRequestException();
        }
        return this.model(value);
    }

    protected abstract dto(value: D): D;
    protected abstract model(value: D): M;
}
