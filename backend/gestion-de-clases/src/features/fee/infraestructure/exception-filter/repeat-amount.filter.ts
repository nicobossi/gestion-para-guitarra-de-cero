import { Catch } from '@nestjs/common';
import { RepeatFieldException } from '../../../../shared/infraestructure/persistence/errors/repeat-field-exception';
import { ModelFilterException } from '../../../../shared/infraestructure/exception-filters/model/model.filter';

@Catch(RepeatFieldException)
export class RepeatAmountFilter extends ModelFilterException<RepeatFieldException> {
    protected responseData() {
        return {
            status: 409,
            title: 'Repeat Amount',
            cause: 'REPEAT_AMOUNT',
            errors: [
                {
                    field: 'amount',
                    motive: 'Mismo valor',
                },
            ],
            message: 'Ya existe una cuota con el mismo monto.',
        };
    }
}
