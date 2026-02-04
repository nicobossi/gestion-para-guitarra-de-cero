import { useNavigate } from 'react-router';
import './page-not-found.css'
import { HOME_ROUTE } from '@/infraestructure/routes/routes';


const PageNotFoundContainer = () => {
    
    const navegate = useNavigate();

    return (
        <section className = "error-404">
            <section className = "error-404_content">
                <div className = "error-404_content--errors">
                    <h2>404</h2>
                    <h3>No se encontró la página</h3>
                </div>
                <button onClick = {() => navegate(HOME_ROUTE)}>Volver al Home</button>
            </section>
            <section className = "error-404_background">

            </section>
        </section>
    )
}

export default PageNotFoundContainer;