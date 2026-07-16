import type { NavItemProps } from "./nav-item";
import { useState } from "react";
import LinkSimple from "./components/link-simple/LinkSimple";
import CompositeLink from "./components/composite-link/CompositeLink";
import { routesStyles } from "./routes-styles";

const NavItem = ({page, isActive} : NavItemProps) => {

    const [isVisible, setIsVisible] = useState(false);

    const onActive = () => setIsVisible(prevIsVisible => !prevIsVisible);

    return (
        "links" in page ? 
            <CompositeLink 
                styles = {routesStyles}
                isVisible = {isVisible}
                isActive = {isActive}
                page = {page} 
                pageName = {page.pageName}  
                onVisible = {onActive} 
            /> :
            <LinkSimple 
                styles = {routesStyles}
                isVisible = {isVisible}
                simpleRoute = {page} 
            /> 
    )
}

export default NavItem;