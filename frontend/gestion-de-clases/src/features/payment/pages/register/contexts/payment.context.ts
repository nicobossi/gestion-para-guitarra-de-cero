import { createContext } from "react";
import type { UsePayment } from "../hooks/payment.use";

const PaymentContext = createContext<UsePayment | null>(null);

export default PaymentContext;