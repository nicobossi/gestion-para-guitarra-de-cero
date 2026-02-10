import type { ModelException } from "@/main/shared/domain/exception/model-exception";
import { ManyPhoneException } from "./many-phone-exception";
import { CauseModelError } from "@/main/shared/infraestructure/domain/cause.error";
import { InvalidPhoneException } from "./invalid-phone-exception";



export class Student {
    
    private readonly id? : number;
    private name : string;
    private surname : string;
    private phone : number;
    private submissionDate : Date;
    private secondName? : string;

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
        this.setPhone(phone);
        this.phone = phone; 
        this.submissionDate = submissionDate;
        this.secondName = secondName;
        this.id = id;
    }

    private setPhone(phone : number) : void {

        if(phone.toString().length !== 10) {
            throw new InvalidPhoneException(this.invalidPhoneMessage(), CauseModelError.InvalidPhone);
        }

        this.phone = phone;
    }

    private invalidPhoneMessage() : string {
        return "El teléfono debe tener 10 caracteres";
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

    manyPhoneException() : ModelException {
        return new ManyPhoneException(this.manyPhoneExceptionMessage(), CauseModelError.RepeatStudentPhone);
    }

    private manyPhoneExceptionMessage() : string {
        return "El alumno " + this.getName + " no puede tener el celular " + this.phone + " porque ya se encuentra registrado";
    }
}