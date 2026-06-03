import { Catch, GatewayTimeoutException, HttpStatus } from '@nestjs/common';
import { DbFilterException } from '../db-filter-exception';
import { FilterExceptionDbData } from '../response-data';

@Catch(GatewayTimeoutException)
export class TimeoutFilterException extends DbFilterException<GatewayTimeoutException> {
    protected responseData(): FilterExceptionDbData {
        return {
            status: HttpStatus.GATEWAY_TIMEOUT,
            message: 'La solicitud ha tardado demasiado tiempo en procesarse.',
        };
    }
}
