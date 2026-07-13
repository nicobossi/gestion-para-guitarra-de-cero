import {
    FeeCreateInput,
    FeeModel,
} from '../../../../../../generated/prisma/models';
import { Fee } from '../../../domain/fee';
import { CreateFee } from './request';
import { FeeResponse } from './response';

export class FeeMapper {
    static modelToSql(fee: Fee): FeeCreateInput {
        return {
            amount: fee.getAmount,
            applicationDate: fee.getApplicationDate,
            paymentLapse: fee.getPaymentLapse,
        };
    }
    static sqlToModel(dto: FeeModel): Fee {
        return new Fee(
            dto.amount,
            dto.paymentLapse,
            new Date(dto.applicationDate),
            dto.id,
        );
    }
    static dtoToModel(dto: CreateFee): Fee {
        return new Fee(dto.amount, dto.paymentLapse, dto.applicationDate);
    }

    static modelToDto(fee: Fee): FeeResponse {
        return {
            id: fee.getId!,
            amount: fee.getAmount,
            applicationDate: fee.getApplicationDate,
            paymentLapse: fee.getPaymentLapse,
        };
    }
}
