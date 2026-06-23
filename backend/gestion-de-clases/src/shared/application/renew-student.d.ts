export interface RenewStudent {
    renew(student: Student): Promise<Student>;
    getWithFullname(
        name: string,
        surname: string,
        secondName: string | null = null,
    ): Promise<Student>;
}
