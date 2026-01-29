


export abstract class DbError extends Error {
    
    constructor(message : string) {
        super(message);
    }
}