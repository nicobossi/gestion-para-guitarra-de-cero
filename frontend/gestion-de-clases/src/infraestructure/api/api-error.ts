


export class ApiError {
    private status : number 
    private message : string 
    private type : ApiErrorType
    private cause? : CauseError;

    constructor(status : number, message : string, type : ApiErrorType, cause? : CauseError) {
        this.status = status;
        this.message = message;
        this.type = type;
        this.cause = cause;
    }

    get getType() : ApiErrorType {
        return this.type
    }

    get getStatus() : number {
        return this.status
    }

    get getMessage() : string {
        return this.message
    }

    isCause(cause : CauseError) : boolean {
        return cause == this.cause
    }

    isType(cause : ApiErrorType) : boolean {
        return cause == this.getType
    }
}

export enum ApiErrorType {
    Server,
    Client,
    Model
}

export enum CauseError {
    RepeatStudentPhone
}