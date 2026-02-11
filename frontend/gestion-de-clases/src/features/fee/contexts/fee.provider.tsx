import useAddData from "@/globals/hooks/useAddData";
import type { UseFee } from "../hooks/fee.use";
import type { Fee } from "@/globals/types/fee";
import FeeContext from "./fee.context";
import type { ReactNode } from "react";
import saveFee from "../services/save-fee";

type FeeProviderProps = {
    children : ReactNode
}

const FeeProvider = ({children} : FeeProviderProps) => {

    const {data, error, freshError, freshData, isLoading, add} = useAddData<Fee>(saveFee);

    const useFee : UseFee = {
        data,
        error,
        freshError,
        freshData,
        isLoading,
        add
    }

    return (
        <FeeContext.Provider value = {useFee}>
            {children}
        </FeeContext.Provider>
    )    
}

export default FeeProvider;