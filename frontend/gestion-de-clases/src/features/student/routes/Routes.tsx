import { INCOME } from "@/globals/routes/student";
import { Route, Routes } from "react-router";
import IncomePanel from "../pages/income-student/IncomeStudent";

const StudentRoutes = () => {
    return (
        <Routes>
            <Route path = {INCOME} element = {<IncomePanel />} />
        </Routes>
    )
}

export default StudentRoutes;