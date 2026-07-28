import { Catch } from '@nestjs/common';
import { ModelFilterException } from '../../../../../shared/infraestructure/exception-filters/model/model.filter';
import { InvalidPhoneException } from '../../../../../shared/domain/value-objects/number-phone/invalid-phone-exception';
import { ErrorData } from '../../../../../shared/infraestructure/exception-filters/error-data';

@Catch(InvalidPhoneException)
export class InvalidPhoneFilter extends ModelFilterException<InvalidPhoneException> {
    protected responseData(): ErrorData {
        return {
            status: 400,
            title: 'Invalid Phone',
            cause: 'BAD_FORMAT',
            errors: [
                {
                    field: 'phone',
                    motive: 'mal formato o inexistente',
                },
            ],
            message:
                'el telefono dado no cumple con el formato de ningún código de area',
        };
    }
}
