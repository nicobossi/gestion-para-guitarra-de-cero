import type { FormContainerProps } from './generic-container';
import './generic-container.css'


const GenericContainer = ({children} : FormContainerProps) => {

    return (
        <div className = "form-container">
            {children}
        </div>
    )
}


export default GenericContainer;