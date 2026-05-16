import { ModelException } from "@/main/shared/domain/exception/model-exception";
import type { CauseModelError } from "@/main/shared/infraestructure/domain/cause.error";



export class ManyPhoneException extends ModelException {
    
    constructor(message : string, causeModel : CauseModelError) {
        super(message, causeModel);
    }
}