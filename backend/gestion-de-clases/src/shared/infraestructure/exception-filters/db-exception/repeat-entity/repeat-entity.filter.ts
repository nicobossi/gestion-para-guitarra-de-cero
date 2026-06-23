import { Catch } from '@nestjs/common';
import { RepeatFieldException } from '../../../persistence/errors/repeat-field-exception';
import { FilterExceptionDbData } from '../response-data';
import { DbExceptionFilter } from '../db-filter-exception';

@Catch(RepeatFieldException)
export class RepeatEntityFilter extends DbExceptionFilter<RepeatFieldException> {
    protected responseData(): FilterExceptionDbData {
        return {
            status: 400,
            message:
                'Existen datos ingresados que ya se encuentran registrados',
        };
    }
}
