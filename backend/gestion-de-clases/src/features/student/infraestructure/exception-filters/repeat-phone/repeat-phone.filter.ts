import { Catch } from '@nestjs/common';
import { RepeatFieldException } from '../../../../../shared/infraestructure/persistence/errors/repeat-field-exception';
import { ModelFilterException } from '../../../../../shared/infraestructure/exception-filters/model/model.filter';

@Catch(RepeatFieldException)
export class RepeatPhoneFilter extends ModelFilterException<RepeatFieldException> {
    protected responseData() {
        return {
            status: 409,
            message:
                'El número de teléfono ya está registrado para otro estudiante.',
        };
    }
}
