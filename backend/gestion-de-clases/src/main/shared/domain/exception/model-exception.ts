import type { CauseModelError } from "../../infraestructure/domain/cause.error";



export abstract class ModelException extends Error {

    private causeModel : CauseModelError
    
    constructor(message : string, cause : CauseModelError) {
        super(message);
        this.causeModel = cause;
    }

    get getCause() : CauseModelError {
        return this.causeModel;
    }
}