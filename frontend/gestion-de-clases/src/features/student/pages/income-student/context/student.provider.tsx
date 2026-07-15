import useAddData from "@/shared/hooks/useAddData";
import type { Student } from "@/shared/types/student";
import type { UseStudent } from "../hooks/student.use";
import StudentContext from "./student.context";
import type { ReactNode } from "react";
import incomeStudent from "../services/income-student";

type StudentProviderProp = {
    children : ReactNode
}

const StudentProvider = ({children} : StudentProviderProp) => {

    const {data, error, freshError, freshData, isLoading, add} = useAddData<Student>(incomeStudent);

    const value : UseStudent = {
        data,
        error,
        isLoading,
        freshError,
        freshData,
        add
    } 

    return (
        <StudentContext.Provider value = {value}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentProvider;