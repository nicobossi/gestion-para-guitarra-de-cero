


export class Student {
    
    private name : string;
    private surname : string;
    private phone : number;
    private submissionDate : Date;
    private secondName : string | undefined;

    constructor(
        name : string, 
        surname : string, 
        phone : number,
        submissionDate : Date,
        secondName? : string
    ) {
        this.name = name;
        this.surname = surname;
        this.phone = phone; 
        this.submissionDate = submissionDate;
        this.secondName = secondName;
    }

    get getName() : string {
        return this.name;
    } 

    get getSurname() : string {
        return this.surname;
    }

    get getSecondName() : string | undefined {
        return this.secondName;
    }

    get getSubmissionDate() : Date {
        return this.submissionDate;
    }

    get getPhoneNumber() : number {
        return this.phone;
    }
}