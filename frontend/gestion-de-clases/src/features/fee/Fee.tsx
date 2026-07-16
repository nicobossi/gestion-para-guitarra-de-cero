import SideBar from "@/shared/components/side-bar/SideBar";
import FeeRoutes from "./routes/routes";
import './fee.css';

const Fee = () => {    
    return (
        <section className = 'fee'>
            <SideBar />
            <FeeRoutes />
        </section>
    )
}

export default Fee;