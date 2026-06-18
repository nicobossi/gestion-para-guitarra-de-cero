import { Calender } from './calender';
import { InvalidPhoneException } from './invalid-phone-exception';
import { Lesson } from './lesson';

export class Student {
    private readonly id?: number;
    private lessons: Lesson[] = [];
    private name: string;
    private surname: string;
    private phone: number;
    private firstLessonDate: Date;
    private secondName?: string;
    private calender = new Calender();

    constructor(
        name: string,
        surname: string,
        phone: number,
        firstLessonDate: Date,
        secondName?: string,
        id?: number,
    ) {
        this.name = name;
        this.surname = surname;
        this.setPhone(phone);
        this.phone = phone;
        this.firstLessonDate = firstLessonDate;
        this.secondName = secondName;
        this.id = id;
    }

    payment(): Lesson[] {
        if (this.haveLessons()) {
            const lastLessonDate = this.lessons[3].getAttendanceDate;
            const firstLessonOfMonthDate =
                this.calender.nextDate(lastLessonDate);
            this.lessons = this.newLessons(firstLessonOfMonthDate);
            return this.lessons.map((lesson) => lesson);
        } else {
            this.lessons = this.newLessons(this.firstLessonDate);
            return this.lessons.map((lesson) => lesson);
        }
    }

    private haveLessons() {
        return this.lessons.length > 0;
    }

    private newLessons(date: Date): Lesson[] {
        return this.calender.registerLessons(date);
    }

    get getName(): string {
        return this.name;
    }

    get getSurname(): string {
        return this.surname;
    }

    get getSecondName(): string | undefined {
        return this.secondName;
    }

    get getSubmissionDate(): Date {
        return this.firstLessonDate;
    }

    get getPhoneNumber(): number {
        return this.phone;
    }

    get getId(): number | undefined {
        return this.id;
    }

    private setPhone(phone: number): void {
        if (phone.toString().length !== 10) {
            throw new InvalidPhoneException(this.invalidPhoneMessage());
        }

        this.phone = phone;
    }

    private invalidPhoneMessage(): string {
        return 'El teléfono debe tener 10 caracteres';
    }
}
