import type { NavItemProps } from "./nav-item";
import { useState } from "react";
import './nav-item.css';
import NavDescription from "./components/nav-description/NavDescription";
import LinksList from "./components/link-list/LinkList";

const NaveItem = ({page, isActive} : NavItemProps) => {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const changeVisible = () => setIsVisible(prevIsVisible => !prevIsVisible);
    
    return (
        <div className = "nav-item">
            <NavDescription 
                pageName = {page.pageName} 
                changeVisible = {changeVisible} 
                isActive = {isActive}
            />
            {isVisible && <LinksList page = {page} />}
        </div>
    )
}

export default NaveItem;