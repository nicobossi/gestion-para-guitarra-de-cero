import type { NavItemProps } from "./nav-item";
import LinkSimple from "./components/link-simple/LinkSimple";
import CompositeLink from "./components/composite-link/CompositeLink";
import Icon from "@/shared/components/icon/Icon";
import { styles } from "./styles";

const NavItem = ({page, isActive} : NavItemProps) => {
    return (
        <section className = {styles(isActive)}>
            {page.icon && <Icon icon = {page.icon} />}
            <Link page = {page} isActive = {isActive} /> 
        </section>
    )
}

const Link = ({page, isActive}: NavItemProps) => {
    return "links" in page ?
        <CompositeLink
            isActive = {isActive}
            page = {page}
            pageName = {page.pageName} /> :
        <LinkSimple
            isVisible = {isActive}
            simpleRoute = {page} />
}


export default NavItem;