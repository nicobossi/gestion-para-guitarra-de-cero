


export class Student {
    
    private name : string;
    private surname : string;
    private phone : number;
    private dateAssistance : Date;
    private secondName : string | undefined;

    constructor(
        name : string, 
        surname : string, 
        phone : number,
        dateAssistance : Date,
        secondName? : string
    ) {
        this.name = name;
        this.surname = surname;
        this.phone = phone; 
        this.dateAssistance = dateAssistance;
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

    get getDateAssistance() : Date {
        return this.dateAssistance;
    }

    get getPhoneNumber() : number {
        return this.phone;
    }
}