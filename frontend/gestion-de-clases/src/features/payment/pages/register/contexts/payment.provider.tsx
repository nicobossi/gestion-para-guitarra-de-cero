import useAddData from "@/shared/hooks/useAddData";
import type { ReactNode } from "react";
import type { Payment } from "@/shared/domain/payment/payment";
import type { UsePayment } from "../hooks/payment.use";
import PaymentContext from "./payment.context";
import registerPayment from "../services/register-payment";

type PaymentProviderProps = {
    children : ReactNode
}

const FeeProvider = ({children} : PaymentProviderProps) => {

    const {data, error, freshError, freshData, isLoading, add} = useAddData<Payment>(registerPayment);

    const usePayment : UsePayment = {
        data,
        error,
        freshError,
        freshData,
        isLoading,
        add
    }

    return (
        <PaymentContext.Provider value = {usePayment}>
            {children}
        </PaymentContext.Provider>
    )    
}

export default FeeProvider;