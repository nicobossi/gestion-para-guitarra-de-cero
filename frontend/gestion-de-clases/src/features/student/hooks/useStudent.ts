import { useState } from "react";
import incomeStudent from "../services/income-student";
import type { Student } from "@/globals/types/student";
import useFetch from "@/globals/hooks/useFetch";
import type { UseStudentType } from "./student.use";


const useStudent = () : UseStudentType => {

    const [student, setStudent] = useState<Student | null>(null);
    const {isLoading, error, freshError, handleFetch} = useFetch();

    const income = async (incomer : Student) : Promise<void> => {

        handleFetch(
            async () => setStudent(await incomeStudent(incomer)),
            () => setStudent(null)
        );
    }

    return {student, error, freshError, isLoading, income}
}

export default useStudent;