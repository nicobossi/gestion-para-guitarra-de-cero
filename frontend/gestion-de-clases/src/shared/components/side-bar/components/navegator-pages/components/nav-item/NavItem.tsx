import type { NavItemProps } from "./nav-item";
import LinkSimple from "./components/link-simple/LinkSimple";
import CompositeLink from "./components/composite-link/CompositeLink";

const NavItem = ({page, isActive} : NavItemProps) => {
    return (
        "links" in page ? 
            <CompositeLink 
                isActive = {isActive}
                page = {page} 
                pageName = {page.pageName}  
            /> :
            <LinkSimple 
                isVisible = {isActive}
                simpleRoute = {page} 
            /> 
    )
}

export default NavItem;