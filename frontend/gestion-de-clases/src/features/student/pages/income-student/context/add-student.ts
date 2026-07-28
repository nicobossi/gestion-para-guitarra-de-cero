import createAddContext from "@/shared/contexts/add/add-provider.context";
import type { Student } from "@/shared/domain/student/student";
import type { Incomer } from "../adapter/incomer/incomer";


export const {
    AddProvider: AddStudentProvider,
    AddContext: StudentContext,
    useValidateAddContext
} = createAddContext<Student, Incomer>()