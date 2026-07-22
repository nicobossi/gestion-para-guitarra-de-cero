import { ModelException } from '../../exceptions/model-exception';

export class InvalidPhoneException extends ModelException {
    constructor(message: string) {
        super(message);
    }
}
