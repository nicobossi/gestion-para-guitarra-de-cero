export class StudentNotFound extends Error {
    constructor(name: string, surname: string, secondName: string | null) {
        super(
            `No hay ningún estudiante con el nombre ${name} ${surname} ${secondName ?? ''}`,
        );
    }
}
