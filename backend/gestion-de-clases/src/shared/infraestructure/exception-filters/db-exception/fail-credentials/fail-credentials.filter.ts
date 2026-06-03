import { Catch, HttpStatus } from '@nestjs/common';
import { CredentialsError } from '../../../persistence/errors/credentials-error';
import { DbFilterException } from '../db-filter-exception';
import { FilterExceptionDbData } from '../response-data';

@Catch(CredentialsError)
export class FailCredentialsFilter extends DbFilterException<CredentialsError> {
    protected responseData(): FilterExceptionDbData {
        return {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            message:
                'Hubo un problema con el servidor, intente nuevamente en unos minutos',
        };
    }
}
