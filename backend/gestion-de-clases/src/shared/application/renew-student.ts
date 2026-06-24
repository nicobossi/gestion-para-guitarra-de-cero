import { Student } from '../../features/student/domain/student/student';

export interface RenewStudent {
    renew(student: Student): Promise<Student>;
    getWithFullname(
        name: string,
        surname: string,
        secondName: string | null,
    ): Promise<Student>;
}

export const RENEW_STUDENT = 'RENEW_STUDENT';
