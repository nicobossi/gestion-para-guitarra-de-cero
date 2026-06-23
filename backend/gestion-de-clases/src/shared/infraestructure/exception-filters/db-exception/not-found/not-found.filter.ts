import { Catch, HttpStatus, NotFoundException } from '@nestjs/common';
import { DbExceptionFilter } from '../db-filter-exception';
import { FilterExceptionDbData } from '../response-data';

@Catch(NotFoundException)
export class NotFoundFilter extends DbExceptionFilter<NotFoundException> {
    protected responseData(): FilterExceptionDbData {
        return {
            status: HttpStatus.NOT_FOUND,
            message: 'No se encontró la respuesta solicitada',
        };
    }
}
