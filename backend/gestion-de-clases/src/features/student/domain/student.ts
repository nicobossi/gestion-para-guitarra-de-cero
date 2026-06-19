import { Calender } from './calender';
import { InvalidLessons } from './exception/invalid-lessons';
import { InvalidPhoneException } from './exception/invalid-phone-exception';
import { Lesson } from './lesson';

export class Student {
    private readonly id?: number;
    private lessons: Lesson[] = [];
    private name: string;
    private surname: string;
    private phone: number;
    private firstLessonDate: Date;
    private secondName: string | null;
    private calender = new Calender();

    constructor(
        name: string,
        surname: string,
        phone: number,
        firstLessonDate: Date,
        secondName: string | null = null,
        id?: number,
        lessons?: Lesson[],
    ) {
        this.name = name;
        this.surname = surname;
        this.setPhone(phone);
        this.phone = phone;
        this.firstLessonDate = firstLessonDate;
        this.secondName = secondName;
        this.id = id;
        this.setLesson(lessons);
    }
    private setLesson(lessons?: Lesson[]) {
        if (lessons) {
            if (lessons.length != 4) {
                throw new InvalidLessons();
            }
            this.lessons = lessons;
        }
    }

    payment(): Lesson[] {
        if (this.haveLessons()) {
            this.lessons = this.renewLessons(this.firtsNextMonthDate());
            return this.getLessons;
        } else {
            this.lessons = this.renewLessons(this.firstLessonDate);
            return this.getLessons;
        }
    }

    private renewLessons(date: Date): Lesson[] {
        return this.calender.registerLessons(date);
    }

    private firtsNextMonthDate() {
        const lastLessonDate = this.lessons[3].getAttendanceDate;
        return this.calender.nextDate(lastLessonDate);
    }

    get getLessons(): Lesson[] {
        return this.lessons.map((lesson) => lesson);
    }

    private haveLessons() {
        return this.lessons.length > 0;
    }

    get getName(): string {
        return this.name;
    }

    get getSurname(): string {
        return this.surname;
    }

    get getSecondName(): string | null {
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
