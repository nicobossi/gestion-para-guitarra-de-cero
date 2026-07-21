import StudentRoutes from './routes/Routes';
import MainContainer from '@/shared/components/main-container/MainContainer';
import studentColors from './styles/colors';

const Student = () => {
    return (
        <MainContainer css = {studentColors}>
            <StudentRoutes />
        </MainContainer>
    )
}

export default Student;