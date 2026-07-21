import { useContext } from "react"
import PaymentContext from "./payment.context";

const usePaymentContext = () => {

    const value = useContext(PaymentContext);

    if(!value) throw new Error("El componente no está suscrito al contexto");

    return value;
}

export default usePaymentContext;