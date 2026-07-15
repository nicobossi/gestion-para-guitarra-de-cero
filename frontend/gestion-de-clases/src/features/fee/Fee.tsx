import AddFeePage from "./pages/add-fee/AddFeePage";
import FeeProvider from "./pages/add-fee/contexts/fee.provider";



const Fee = () => {
    
    return (
        <FeeProvider>
            <AddFeePage />
        </FeeProvider>
    )
}

export default Fee;