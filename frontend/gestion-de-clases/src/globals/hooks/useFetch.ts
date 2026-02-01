import { ApiErrorType, type ApiError } from "@/infraestructure/api/api-error";
import { useState } from "react";


const useFetch = () => {
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<ApiError | null>(null);

    async function handleFetch(submit : () => void, untrack : () => void) {

        setIsLoading(true);

        try {
            await submit();
            handleAssert();
        }
        catch(error : unknown) {
            handleError(error as ApiError, untrack);
        }
    }

    function handleAssert() {
        setError(null);
        setIsLoading(false);
    }

    function handleError(error : ApiError, untrack : () => void) {
        setIsLoading(false);
        untrack();
        if(error.isType(ApiErrorType.Client)) console.log(error); // navegar
        if(error.isType(ApiErrorType.Server)) console.log(error); // navegar
        if(error.isType(ApiErrorType.Model)) setError(error); 
    }

    function freshError() : void {
        setError(null);
    }

    return {isLoading, error, freshError, handleFetch}
}

export default useFetch;