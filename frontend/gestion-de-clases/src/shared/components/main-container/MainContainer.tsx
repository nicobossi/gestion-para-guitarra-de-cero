import { useState } from "react";
import SideBar from "../side-bar/SideBar";
import { styles } from "./styles";
import type { MainContainerProps } from "./main-container";

const MainContainer = ({children}: MainContainerProps) => {
    const [isActive, setIsActive] = useState(false); 
    
    const onActive = () => setIsActive(prevIsVisible => !prevIsVisible);

    return (
        <section className = {styles({size: isActive ? 'complete' : 'grid'})}>
            <SideBar isActive = {isActive} onActive = {onActive}/>
            {children}
        </section>
    )
}

export default MainContainer;