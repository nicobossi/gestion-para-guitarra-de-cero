import type { ReactNode } from "react"
import useStudent from "../hooks/useStudent";
import type { UseStudentType } from "../hooks/student.use";
import StudentContext from "./student.context";


type StudentProviderProp = {
    children : ReactNode
}


const StudentProvider = ({children} : StudentProviderProp) => {
    
    const {student, error, freshError, isLoading, income} = useStudent();

    const context : UseStudentType = {
        student,
        error,
        isLoading,
        freshError,
        income
    } 

    return (
        <StudentContext.Provider value = {context}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentProvider;