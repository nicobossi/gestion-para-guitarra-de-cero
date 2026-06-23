import { Catch, HttpStatus, ServiceUnavailableException } from '@nestjs/common';
import { DbExceptionFilter } from '../db-filter-exception';
import { FilterExceptionDbData } from '../response-data';

@Catch(ServiceUnavailableException)
export class DisconectFilter extends DbExceptionFilter<ServiceUnavailableException> {
    protected responseData(): FilterExceptionDbData {
        return {
            status: HttpStatus.SERVICE_UNAVAILABLE,
            message:
                'El servidor no puede procesar la petición en estos momentos',
        };
    }
}
