import { useState } from "react";
import incomeStudent from "../services/income-student";
import type { Entrant } from "@/globals/types/entrant";


const useStudent = () => {

    const [student, setStudent] = useState<Entrant | null>(null);
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const income = async (student : Entrant) : Promise<void> => {
        console.log(student);
        setIsLoading(true);
        
        try {
            const newStudent : Entrant = await incomeStudent(student);
            setStudent(newStudent);
            setIsLoading(false);
        }
        catch(error : unknown) {
            console.log(error) //???
            setIsError(true);
            setIsLoading(false)
        }
    }

    return {student, isError, isLoading, income}
}

export default useStudent;