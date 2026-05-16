


export class Lesson {

    private dateAssistance : Date;

    constructor(dateAssistance : Date) {
        this.dateAssistance = dateAssistance;
    }

    get getDate() {
        return this.dateAssistance.getDate();
    }

}