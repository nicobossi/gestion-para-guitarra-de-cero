import { Student } from '../../features/student/domain/student/student';
import { Fullname } from '../domain/entities/full-name';

export interface RenewStudent {
    renew(student: Student): Promise<Student>;
    getWithFullname(
        name: string,
        surname: string,
        secondName?: string,
    ): Promise<Student>;
    getWithPhone(phone: string): Promise<Student>;
    getAllFullNames(): Promise<Fullname[]>;
}

export const RENEW_STUDENT = 'RENEW_STUDENT';
