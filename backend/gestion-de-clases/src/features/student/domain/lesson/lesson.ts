export class Lesson {
    private attendanceDate: Date;
    private isCancel: boolean = false;
    private readonly id?: number;

    constructor(attendanceDate: Date, id?: number) {
        this.attendanceDate = attendanceDate;
        this.id = id;
    }

    get getIsCancel() {
        return this.isCancel;
    }

    get getAttendanceDate() {
        return this.attendanceDate;
    }

    get getId() {
        return this.id;
    }
}
