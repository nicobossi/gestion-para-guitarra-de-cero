import { ModelException } from '../model-exception/model-exception';

export class InvalidPhoneException extends ModelException {
    constructor(message: string) {
        super(message);
    }
}
