import useAddData from "@/shared/hooks/useAddData"
import type { JSX } from "react"
import createUseAddData from "./add.context"
import validateContext from "../validate"

type AddProviderProps<T extends object> = {
    income: (data: T) => Promise<T>
    children: JSX.Element
}

function createAddContext<T extends object>() {

    const AddContext = createUseAddData<T>();

    function AddProvider({income, children}: AddProviderProps<T>) {

    const {data, error, freshError, freshData, isLoading, add} = useAddData(income);

    const value = {
        data,
        error,
        freshError,
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