import { ModelException } from '../../../shared/domain/model-exception/model-exception';

export class InvalidPhoneException extends ModelException {
    constructor(message: string) {
        super(message);
    }
}
