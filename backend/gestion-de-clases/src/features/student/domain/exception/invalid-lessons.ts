export class InvalidLessons extends Error {
    constructor() {
        super('Deben ser excactamente 4 lecciones');
    }
}
