export class FullName {
    private firstName: string;
    private lastName: string;
    private secondName?: string;

    constructor(firstName: string, lastName: string, secondName?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.secondName = secondName;
    }

    get getFirstName() {
        return this.firstName;
    }

    get getLastName() {
        return this.lastName;
    }

    get getSecondName() {
        return this.secondName;
    }
}
