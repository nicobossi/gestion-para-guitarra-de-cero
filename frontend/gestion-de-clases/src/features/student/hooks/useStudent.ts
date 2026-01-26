import { useState } from "react";
import incomeStudent from "../services/income-student";
import type { Student } from "@/globals/types/student";
import useFetch from "@/globals/hooks/useFetch";


const useStudent = () => {

    const [student, setStudent] = useState<Student | null>(null);
    const {isLoading, isError, handleFetch} = useFetch();

    const income = async (student : Student) : Promise<void> => {

        handleFetch(
            async () => setStudent(await incomeStudent(student)),
            () => setStudent(null)
        );
    }

    return {student, isError, isLoading, income}
}

export default useStudent;