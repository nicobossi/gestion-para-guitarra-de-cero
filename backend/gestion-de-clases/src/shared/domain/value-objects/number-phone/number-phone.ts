import { InvalidPhoneException } from './invalid-phone-exception';

export class NumberPhone {
    private phone: string;

    constructor(phone: string) {
        this.phone = this.validatePhone(phone);
    }

    get getPhone() {
        return this.phone.toString();
    }

    private validatePhone(phone: string) {
        if (!this.havePlusSimbol(phone)) {
            throw new InvalidPhoneException(this.notPlusMessage());
        }

        if (!this.haveTenDigits(phone)) {
            throw new InvalidPhoneException(this.countErrorMessage());
        }

        return phone;
    }

    private havePlusSimbol(phone: string) {
        return phone[0] === '+';
    }

    private haveTenDigits(phone: string) {
        return phone.slice(3).length === 10;
    }

    private notPlusMessage(): string {
        return 'El teléfono debe tener el simbolo + para el prefijo';
    }

    private countErrorMessage(): string {
        return 'El teléfono debe tener 10 caracteres';
    }
}
