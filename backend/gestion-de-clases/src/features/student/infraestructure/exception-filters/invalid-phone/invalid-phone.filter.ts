import { Catch } from '@nestjs/common';
import { InvalidPhoneException } from '../../../../../shared/domain/number-phone/invalid-phone-exception';
import { ModelFilterException } from '../../../../../shared/infraestructure/exception-filters/model/model.filter';

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
