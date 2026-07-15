import { Route, Routes } from 'react-router';
import IncomePanel from './pages/income-student/IncomeStudent';
import { INCOME } from '@/globals/routes/student';


const Student = () => {

    return (
        <Routes>
            <Route path = {INCOME} element = {<IncomePanel />} />
        </Routes>
    )
}

export default Student;