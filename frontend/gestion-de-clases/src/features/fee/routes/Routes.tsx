import { ADD } from "@/globals/routes/fee";
import { Route, Routes } from "react-router";
import AddFeePanel from "../pages/add-fee/AddFeePage";

const FeeRoutes = () => {
    return (
        <Routes>
            <Route path = {ADD} element = {<AddFeePanel />} />
        </Routes>
    )
}

export default FeeRoutes;