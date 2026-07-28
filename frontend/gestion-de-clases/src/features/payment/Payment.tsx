import MainContainer from '@/shared/components/main-container/MainContainer';
import paymentColors from './styles/colors';
import PaymentRoutes from './routes/routes';

const Payment = () => {
    return (
        <MainContainer css = {paymentColors}>
            <PaymentRoutes />
        </MainContainer>
    )
}

export default Payment;