import { ManyPhoneException } from "./many-phone-exception";



export class Student {
    
    private id? : number | undefined;
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
        secondName? : string,
        id? : number
    ) {
        this.name = name;
        this.surname = surname;
        this.phone = phone; 
        this.submissionDate = submissionDate;
        this.secondName = secondName;
        this.id = id;
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

    get getId() : number | undefined {
        return this.id;
    }

    manyPhoneException() : ManyPhoneException {
        return new ManyPhoneException(this.manyPhoneExceptionMessage());
    }

    private manyPhoneExceptionMessage(): string {
        return "El alumno " + this.getName + " no puede tener el celular " + this.phone + " porque ya se encuentra registrado";
    }
}