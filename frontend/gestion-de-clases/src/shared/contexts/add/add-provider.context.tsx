import useAddData from "@/shared/hooks/useAddData"
import type { JSX } from "react"
import createUseAddData from "./add.context"
import validateContext from "../validate"

type AddProviderProps<T extends object, K> = {
    income: (data: K) => Promise<T>
    children: JSX.Element
}

function createAddContext<T extends object, K>() {

    const AddContext = createUseAddData<T, K>();

    function AddProvider({income, children}: AddProviderProps<T, K>) {

    const {data, error, freshData, isLoading, add} = useAddData(income);

    const value = {
        data,
        error,
        freshData,
        isLoading,
        add
    }

    return (
        <AddContext.Provider value = {value}>
            {children}
        </AddContext.Provider>
        )
    }

    const useValidateAddContext = () => validateContext(AddContext);

    return {AddProvider, AddContext, useValidateAddContext}
}

export default createAddContext;