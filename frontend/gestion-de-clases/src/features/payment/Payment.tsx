import StudentRoutes from './routes/routes';
import MainContainer from '@/shared/components/main-container/MainContainer';
import paymentColors from './styles/colors';

const Payment = () => {
    return (
        <MainContainer css = {paymentColors}>
            <StudentRoutes />
        </MainContainer>
    )
}

export default Payment;