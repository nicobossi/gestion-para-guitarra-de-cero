import { Route, Routes } from "react-router";
import { REGISTER } from "@/globals/routes/payment";
import RegisterPaymentPanel from "../pages/register/RegisterPaymentPanel";

const PaymentRoutes = () => {
    return (
        <Routes>
            <Route path = {REGISTER} element = {<RegisterPaymentPanel />} />
        </Routes>
    )
}

export default PaymentRoutes;