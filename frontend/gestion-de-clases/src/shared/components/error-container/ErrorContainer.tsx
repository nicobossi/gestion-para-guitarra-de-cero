import { useState } from 'react'
import type { ErrorContainerProps } from './error-container'
import './error-container.css'

const ErrorContainer = ({content, onSubmit} : ErrorContainerProps) => {

    const [isClick, setClick] = useState<boolean>(false);

    const handleClick = () => {
        setClick(true);
        setTimeout(onSubmit, 400)
    }
    
    return (
        <div className = {`error-container ${isClick && "error-container_disable"}`}>
            <section className = 'error-background'>
                <h2>¡Oh no!</h2>
            </section>
            <section className = 'error-content'>
                <h3>Ingreso Fallido</h3>
                <p className = 'error-content_description'>{content}</p>
                <button type="button" onClick = {handleClick}>Volver a intentar</button>
            </section>
        </div>
    )
}

export default ErrorContainer;