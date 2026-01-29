import { ModelException } from "@/main/shared/domain/exception/model-exception";



export class ManyPhoneException extends ModelException {
    
    constructor(message : string) {
        super(message);
    }
}