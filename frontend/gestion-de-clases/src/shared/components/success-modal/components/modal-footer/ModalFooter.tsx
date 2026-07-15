import { Link } from 'react-router';
import './modal-footer.css'
import type { JSX } from 'react';

type ModalFooterProps = {
    link?: () => JSX.Element
}

const ModalFooter = ({link}: ModalFooterProps) => {
    return (
        <footer className = "modal-navegate">
            <div className = "home-link">
                <Link to="/">Volver al Home</Link>
            </div>
            {link && link()}
        </footer>
    )
}

export default ModalFooter;