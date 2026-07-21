import MainContainer from '@/shared/components/main-container/MainContainer';
import FeeRoutes from './routes/Routes';
import './fee.css';
import feeColors from './styles/colors';

const Fee = () => {    
    return (
        <MainContainer css = {feeColors}>
            <FeeRoutes />
        </MainContainer>
    )
}

export default Fee;