import FeeProvider from "./contexts/fee.provider";
import AddFeePage from "./pages/add-fee/AddFeePage";



const Fee = () => {
    
    return (
        <FeeProvider>
            <AddFeePage />
        </FeeProvider>
    )
}

export default Fee;