import { Route, Routes } from "react-router";
import AddFeePanel from "./pages/add-fee/AddFeePage";
import { ADD } from "@/globals/routes/fee";

const Fee = () => {
    
    return (
        <Routes>
            <Route path = {ADD} element = {<AddFeePanel />} />
        </Routes>
    )
}

export default Fee;