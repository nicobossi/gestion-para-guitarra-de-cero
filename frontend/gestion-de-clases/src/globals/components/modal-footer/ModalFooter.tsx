import { Link } from 'react-router';
import './modal-footer.css'


const ModalFooter = () => {
    return (
        <footer className = "modal-navegate">
            <div className = "home-link">
                <Link to="/">Volver al Home</Link>
            </div>
        </footer>
    )
}

export default ModalFooter;