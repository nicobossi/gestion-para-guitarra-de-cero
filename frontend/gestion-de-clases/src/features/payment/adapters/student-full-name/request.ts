import type { FullName } from "./full-name";

function adapteCompleteName(completeName: string) {
    const fullName = completeName.split(" ");
    return fullName.length === 2 ? nameAndSurname(fullName) : namesAndSurname(fullName);
}

const nameAndSurname  = (fullName: string[]): FullName => {
    return {
        firstName: fullName[0],
        surname: fullName[1]
    }
};
const namesAndSurname = (fullName: string[]): FullName => {
    return {
        firstName: fullName[0],
        secondName: fullName[1],
        surname: fullName[2]
    }
};

export default adapteCompleteName;
