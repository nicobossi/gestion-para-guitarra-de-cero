import { Calender } from '../calender/calender';
import { InvalidPhoneException } from '../exception/invalid-phone-exception';
import { Lesson } from '../lesson/lesson';
import { StateProvider } from './state-provider';
import { StudentState } from './student-state';

export class Student {
    private readonly id?: number;
    private lessons: Lesson[];
    private name: string;
    private surname: string;
    private phone: number;
    private firstLessonDate: Date;
    private secondName: string | null;
    private calender = new Calender();
    private state: StudentState;

    constructor(
        name: string,
        surname: string,
        phone: number,
        firstLessonDate: Date,
        secondName: string | null = null,
        id?: number,
        lessons?: Lesson[],
    ) {
        this.state = StateProvider.provide(lessons);
        this.name = name;
        this.surname = surname;
        this.setPhone(phone);
        this.phone = phone;
        this.firstLessonDate = firstLessonDate;
        this.secondName = secondName;
        this.id = id;
        this.lessons = this.addLessons(lessons);
    }

    payment(): Lesson[] {
        this.lessons = this.state.payment(this);
        this.state = StateProvider.provide(this.lessons);
        return this.getLessons;
    }

    renewLessons(date: Date): Lesson[] {
        return this.calender.registerLessons(date);
    }

    firtsNextMonthDate() {
        const lastLessonDate = this.lessons[3].getAttendanceDate;
        return this.calender.nextDate(lastLessonDate);
    }

    private addLessons(lessons?: Lesson[]) {
        return this.state.addLessons(lessons);
    }

    firstLesson(): Lesson {
        return this.state.getLesson(this, 0);
    }
    secondLesson(): Lesson {
        return this.state.getLesson(this, 1);
    }
    threeLesson(): Lesson {
        return this.state.getLesson(this, 2);
    }
    fourLesson(): Lesson {
        return this.state.getLesson(this, 3);
    }

    get getLessons(): Lesson[] {
        return this.lessons.map((lesson) => lesson);
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

    get getFirstLessonDate(): Date {
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
