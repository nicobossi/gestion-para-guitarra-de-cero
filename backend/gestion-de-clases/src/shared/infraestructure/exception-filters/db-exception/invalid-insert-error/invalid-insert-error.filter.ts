import { Catch, HttpStatus } from '@nestjs/common';
import { InvalidInsertError } from '../../../persistence/errors/validation-error';
import { DbExceptionFilter } from '../db-filter-exception';
import { FilterExceptionDbData } from '../response-data';

@Catch(InvalidInsertError)
export class InvalidInserErrorFilter extends DbExceptionFilter<InvalidInsertError> {
    protected responseData(): FilterExceptionDbData {
        return {
            status: HttpStatus.BAD_REQUEST,
            message: 'No se pudo realizar correctamente la inserción',
        };
    }
}
