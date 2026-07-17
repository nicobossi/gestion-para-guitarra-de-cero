import type { NavItemProps } from "./nav-item";
import LinkSimple from "./components/link-simple/LinkSimple";
import CompositeLink from "./components/composite-link/CompositeLink";
import { routesStyles } from "./routes-styles";

const NavItem = ({page, isActive} : NavItemProps) => {
    return (
        "links" in page ? 
            <CompositeLink 
                styles = {routesStyles}
                isActive = {isActive}
                page = {page} 
                pageName = {page.pageName}  
            /> :
            <LinkSimple 
                styles = {routesStyles}
                isVisible = {isActive}
                simpleRoute = {page} 
            /> 
    )
}

export default NavItem;