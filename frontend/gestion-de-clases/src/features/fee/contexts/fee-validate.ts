import { useContext } from "react"
import FeeContext from "./fee.context"



const useFeeContext = () => {

    const value = useContext(FeeContext);

    if(!value) throw Error("El componente no está suscrito al contexto");

    return value;
}

export default useFeeContext;