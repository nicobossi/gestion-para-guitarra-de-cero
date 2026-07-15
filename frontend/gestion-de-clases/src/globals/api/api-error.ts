


export class ApiError {
    private status : number 
    private message : string 
    private cause : CauseError;

    constructor(status : number, message : string, cause : CauseError) {
        this.status = status;
        this.message = message;
        this.cause = cause;
    }

    get getStatus() : number {
        return this.status
    }

    get getMessage() : string {
        return this.message
    }

    setCause(cause : CauseError) {
        this.cause = cause;
    }

    isCause(cause : CauseError) : boolean {
        return cause == this.cause
    }
}

export const CauseError = {
    RepeatStudentPhone: 'Repeat Student Phone',
    RepeatAmount: 'Repeat Amount',
    Server: 'Server',
    Client: 'Client'
} as const 

export type CauseError = typeof CauseError[keyof typeof CauseError];

