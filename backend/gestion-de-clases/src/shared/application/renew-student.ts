import { Student } from '../../features/student/domain/student/student';

export interface RenewStudent {
    renew(student: Student): Promise<Student>;
    getWithFullname(
        name: string,
        surname: string,
        secondName?: string,
    ): Promise<Student>;
    getWithPhone(phone: number): Promise<Student>;
}

export const RENEW_STUDENT = 'RENEW_STUDENT';
