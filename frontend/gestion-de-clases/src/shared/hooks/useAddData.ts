import { useState } from "react";
import useFetch from "./useFetch";

const useAddData = <T, K>(income: (incomer: K) => Promise<T>) => {
    const [data, setEntity] = useState<T | null>(null);
    const {isLoading, error, freshError, handleFetch} = useFetch();

    const add = async (incomer: K) => {

        handleFetch(
            async () => setEntity(await income(incomer)),
            () => setEntity(null)
        )
    }

    const freshData = () =>  {
        setEntity(null);
        freshError()
    }

    return {data, error, freshData, isLoading, add}
}

export default useAddData;