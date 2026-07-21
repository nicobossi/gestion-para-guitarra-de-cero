import { useEffect, useState } from "react";
import { getStudentCompleteName } from "../services/get-complete-name.service";
import type { FullName } from "../adapters/student-full-name/full-name";

const useCompleteName = () => {
    const [fullNames, setFullName] = useState<FullName[]>([]);

    useEffect(() => {
        getStudentCompleteName()
            .then(value => setFullName(value))
            .catch(error => console.log(error))
        }, []);

    return {fullNames}
}

export default useCompleteName;