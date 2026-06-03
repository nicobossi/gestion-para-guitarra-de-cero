import { Catch, GatewayTimeoutException, HttpStatus } from '@nestjs/common';
import { DbFilterException } from '../db-filter-exception';

@Catch(GatewayTimeoutException)
export class TimeoutFilterException extends DbFilterException<GatewayTimeoutException> {
    protected getResponseData(): { status: number; message: string } {
        return {
            status: HttpStatus.GATEWAY_TIMEOUT,
            message: 'La solicitud ha tardado demasiado tiempo en procesarse.',
        };
    }
}
