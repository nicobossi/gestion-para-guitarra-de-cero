import { ModelException } from '../../../shared/domain/model-exception/model-exception';

export class RepeatPhoneException extends ModelException {
    constructor(message: string) {
        super(message);
    }
}
