import { Catch } from '@nestjs/common';
import { ModelFilterException } from '../../../../../shared/infraestructure/exception-filters/model/model.filter';
import { InvalidPhoneException } from '../../../../../shared/domain/value-objects/number-phone/invalid-phone-exception';

@Catch(InvalidPhoneException)
export class InvalidPhoneFilter extends ModelFilterException<InvalidPhoneException> {
    protected responseData() {
        return {
            status: 400,
            message:
                'el telefono dado no cumple con el formato de ningún código de area',
        };
    }
}
