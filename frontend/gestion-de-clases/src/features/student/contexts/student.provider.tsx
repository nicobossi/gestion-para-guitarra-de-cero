import useAddData from "@/globals/hooks/useAddData";
import incomeStudent from "../services/income-student";
import type { Student } from "@/globals/types/student";
import type { UseStudent } from "../hooks/student.use";
import StudentContext from "./student.context";
import type { ReactNode } from "react";

type StudentProviderProp = {
    children : ReactNode
}

const StudentProvider = ({children} : StudentProviderProp) => {

    const {data, error, freshError, isLoading, add} = useAddData<Student>(incomeStudent);

    const value : UseStudent = {
        data,
        error,
        isLoading,
        freshError,
        add
    } 

    return (
        <StudentContext.Provider value = {value}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentProvider;