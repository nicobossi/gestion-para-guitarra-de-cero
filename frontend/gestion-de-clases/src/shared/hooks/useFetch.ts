import { CauseError, type ApiError } from "@/infraestructure/api/api-error";
import { SERVER_ERROR_ROUTE } from "@/infraestructure/routes/routes";
import { useState } from "react";
import { useNavigate } from "react-router";


const useFetch = () => {

    const navegate = useNavigate();
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
        if(error.isCause(CauseError.Client)) console.log(error); 
        if(error.isCause(CauseError.Server)) navegate("/" + SERVER_ERROR_ROUTE) 
        setError(error); 
    }

    function freshError() : void {
        setError(null);
    }

    return {isLoading, error, freshError, handleFetch}
}

export default useFetch;