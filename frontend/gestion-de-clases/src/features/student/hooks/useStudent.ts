import { useState } from "react";
import incomeStudent from "../services/income-student";
import type { Entrant } from "@/globals/types/student";
import useFetchTimeout from "@/globals/hooks/useFetchTimeout";


const useStudent = () => {

    const [student, setStudent] = useState<Entrant | null>(null);
    const {isLoading, isError, handleFetch} = useFetchTimeout();

    const income = async (student : Entrant) : Promise<void> => {

        handleFetch(async () => {
            setStudent(await incomeStudent(student));
        })
    }

    return {student, isError, isLoading, income}
}

export default useStudent;