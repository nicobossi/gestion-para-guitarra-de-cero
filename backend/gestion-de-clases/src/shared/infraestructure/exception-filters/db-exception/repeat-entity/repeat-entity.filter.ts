import { Catch } from '@nestjs/common';
import { RepeatEntityException } from '../../../persistence/errors/repeat-entity-exception';
import { FilterExceptionDbData } from '../response-data';
import { DbFilterException } from '../db-filter-exception';

@Catch(RepeatEntityException)
export class RepeatEntityFilter extends DbFilterException<RepeatEntityException> {
    protected responseData(): FilterExceptionDbData {
        return {
            status: 400,
            message:
                'Existen datos ingresados que ya se encuentran registrados',
        };
    }
}
