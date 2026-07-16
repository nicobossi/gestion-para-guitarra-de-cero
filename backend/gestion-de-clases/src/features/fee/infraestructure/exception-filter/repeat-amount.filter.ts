import { Catch } from '@nestjs/common';
import { RepeatFieldException } from '../../../../shared/infraestructure/persistence/errors/repeat-field-exception';
import { ModelFilterException } from '../../../../shared/infraestructure/exception-filters/model/model.filter';

@Catch(RepeatFieldException)
export class RepeatAmountFilter extends ModelFilterException<RepeatFieldException> {
    protected responseData() {
        return {
            status: 409,
            message:
                'Una cuota no puede tener el mismo monto que otra cuota existente.',
        };
    }
}
