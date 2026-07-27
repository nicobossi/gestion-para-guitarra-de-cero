import { useContext } from "react"
import type { AddContext } from "./add/add.context";

function validateContext<T extends object>(context: AddContext<T>) {
    const contextValue = useContext(context);

    if(!contextValue) {
        throw new Error("El componente no está suscrito al contexto");
    }

    return contextValue;
}

export default validateContext;