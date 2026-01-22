import './title-container.css'
import type { TitleContainerProps } from "./title-container";


const TitleContainer = ({title} : TitleContainerProps) => {
    return (
        <div className='title-container'>
            <h2>{title}</h2>
        </div>
    )
}

export default TitleContainer;