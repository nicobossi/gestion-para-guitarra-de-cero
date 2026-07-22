import { FullName } from '../../../../shared/domain/value-objects/full-name/full-name';
import { NumberPhone } from '../../../../shared/domain/value-objects/number-phone/number-phone';
import { Calender } from '../calender/calender';
import { Lesson } from '../lesson/lesson';
import { StateProvider } from './state-provider';
import { StudentState } from './student-state';

export class Student {
    private readonly id?: number;
    private lessons: Lesson[];
    private phone: NumberPhone;
    private firstLessonDate: Date;
    private calender = new Calender();
    private state: StudentState;
    private readonly fullName: FullName;

    constructor(
        name: string,
        surname: string,
        phone: string,
        firstLessonDate: Date,
        secondName?: string,
        id?: number,
        lessons?: Lesson[],
    ) {
        this.fullName = new FullName(name, surname, secondName);
        this.state = StateProvider.provide(lessons);
        this.phone = new NumberPhone(phone);
        this.firstLessonDate = firstLessonDate;
        this.id = id;
        this.lessons = this.getInitLessons(lessons);
    }

    payment() {
        this.lessons = this.state.payment(this);
        this.state = StateProvider.provide(this.lessons);
        return this.getLessons;
    }

    renewLessons(date: Date) {
        return this.calender.registerLessons(date);
    }

    firtsNextMonthDate() {
        const lastLessonDate = this.lessons[3].getAttendanceDate;
        return this.calender.nextDate(lastLessonDate);
    }

    private getInitLessons(lessons?: Lesson[]) {
        return this.state.getInitLessons(lessons);
    }

    firstLesson() {
        return this.state.getLesson(this, 0);
    }
    secondLesson() {
        return this.state.getLesson(this, 1);
    }
    threeLesson() {
        return this.state.getLesson(this, 2);
    }
    fourLesson() {
        return this.state.getLesson(this, 3);
    }

    get getLessons() {
        return this.lessons.map((lesson) => lesson);
    }

    get getName() {
        return this.fullName.getFirstName;
    }

    get getSurname() {
        return this.fullName.getLastName;
    }

    get getSecondName() {
        return this.fullName.getSecondName;
    }

    get getFirstLessonDate() {
        return this.firstLessonDate;
    }

    get getPhoneNumber() {
        return this.phone.getPhone;
    }

    get getId() {
        return this.id;
    }
}
