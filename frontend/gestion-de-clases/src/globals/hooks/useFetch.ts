import { useState } from "react";


const useFetch = () => {
    
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleFetch(save : () => void, untrack : () => void) {

        setIsLoading(true);

        try {
            await save();
            handleAssert();
        }
        catch(error : unknown) {
            handleError(error, untrack);
        }
    }

    function handleAssert() {
        setIsError(false);
        setIsLoading(false);
    }

    function handleError(error : unknown, untrack : () => void) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
        untrack();
    }

    const onLoading = () : void => {
        setIsLoading(true);
    }

    return {isLoading, isError, onLoading, handleFetch}
}

export default useFetch;