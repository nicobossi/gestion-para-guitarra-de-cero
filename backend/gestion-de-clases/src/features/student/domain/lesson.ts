export class Lesson {
    private attendanceDate: Date;
    private isCancel: boolean = false;

    constructor(attendanceDate: Date) {
        this.attendanceDate = attendanceDate;
    }

    get getIsCancel(): boolean {
        return this.isCancel;
    }

    get getAttendanceDate() {
        return this.attendanceDate;
    }
}
