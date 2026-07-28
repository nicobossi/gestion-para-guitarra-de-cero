import { useContext } from "react"
import type { AddContext } from "./add/add.context";

function validateContext<T extends object, K>(context: AddContext<T, K>) {
    const contextValue = useContext(context);

    if(!contextValue) {
        throw new Error("El componente no está suscrito al contexto");
    }

    return contextValue;
}

export default validateContext;