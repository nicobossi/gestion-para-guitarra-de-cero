import { ModelException } from "@/main/shared/domain/exception/model-exception";
import type { CauseModelError } from "@/main/shared/infraestructure/domain/cause.error";


export class InvalidPhoneException extends ModelException {

    constructor(message : string, cause : CauseModelError) {
        super(message, cause);
    }
}