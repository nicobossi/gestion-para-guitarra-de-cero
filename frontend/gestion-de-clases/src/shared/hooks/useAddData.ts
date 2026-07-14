import { useState } from "react";
import useFetch from "./useFetch";



const useAddData = <T>(income : (incomer : T) => Promise<T>) => {
    const [data, setData] = useState<T | null>(null);
    const {isLoading, error, freshError, handleFetch} = useFetch();

    const add = async (incomer : T) : Promise<void>=> {

        handleFetch(
            async () => setData(await income(incomer)),
            () => setData(null)
        )
    }

    const freshData = () : void =>  {
        setData(null);
    }

    return {data, error, freshError, freshData, isLoading, add}

}

export default useAddData;