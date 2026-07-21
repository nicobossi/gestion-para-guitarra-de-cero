import type { FullName } from "@/features/payment/adapters/student-full-name/full-name";
import type { SelectElement } from "@/shared/types/input";

export const adapteFullNames = (fullNames : FullName[]) => 
    fullNames.map(fullName => adapteFullName(fullName));

const adapteFullName = (fullName: FullName): SelectElement => {
    return {
        value: `${fullName.firstName} ${fullName.secondName ?? ''} ${fullName.surname}`
    }
} 
