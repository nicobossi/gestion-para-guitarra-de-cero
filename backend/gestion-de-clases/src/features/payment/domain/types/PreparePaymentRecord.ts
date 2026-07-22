import { Price } from '../../../../shared/domain/entities/price';
import { Fullname } from '../../../../shared/domain/entities/full-name';

export interface PreparePaymentRecord {
    fullNames: Fullname[];
    prices: Price[];
}
