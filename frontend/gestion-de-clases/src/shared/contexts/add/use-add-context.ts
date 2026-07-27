import React, { useContext } from "react"

function useAddContext<T>(context: React.Context<T | null>) {
    const addContext = useContext(context);

    if(!addContext) {
        throw new Error("El componente no está suscrito al contexto");
    }

    return addContext;
}

export default useAddContext;