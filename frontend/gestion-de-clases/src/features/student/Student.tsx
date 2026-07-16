import SideBar from '@/shared/components/side-bar/SideBar';
import './student.css';
import StudentRoutes from './routes/routes';

const Student = () => {
    return (
        <section className = 'student'>
            <SideBar />
            <StudentRoutes />
        </section>
    )
}

export default Student;