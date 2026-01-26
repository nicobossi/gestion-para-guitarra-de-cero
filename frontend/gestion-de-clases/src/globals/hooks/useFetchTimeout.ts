import { useState } from "react";


const useFetchTimeout = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleFetch(save : () => void) {

        setIsLoading(true);

        try {
            await save();
            handleAssert();
        }
        catch(error : unknown) {
            handleError(error);
        }
    }

    function handleAssert() {
        setIsError(false);
        setIsLoading(false);
    }

    function handleError(error : unknown) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
    }

    const onLoading = () : void => {
        setIsLoading(true);
    }

    return {isLoading, isError, onLoading, handleFetch}
}

export default useFetchTimeout;