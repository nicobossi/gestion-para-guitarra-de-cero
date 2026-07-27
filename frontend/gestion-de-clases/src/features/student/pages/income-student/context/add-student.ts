import createAddContext from "@/shared/contexts/add/add-provider.context";
import type { Student } from "@/shared/domain/student/student";


export const {
    AddProvider: AddStudentProvider,
    AddContext: StudentContext,
    useValidateAddContext
} = createAddContext<Student>()