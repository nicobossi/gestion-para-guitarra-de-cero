export class StudentsWithSameFullname extends Error {
    constructor(name: string, surname: string, secondName: string | null) {
        super(
            `existen varios estudiantes con el nombre ${name} ${surname} ${secondName ?? ''}`,
        );
    }
}
