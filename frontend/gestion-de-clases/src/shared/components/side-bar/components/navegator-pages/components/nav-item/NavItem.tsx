import type { NavItemProps } from "./nav-item";
import CompositeLink from "./components/composite-link/CompositeLink";
import useActive from "@/shared/hooks/useActive";
import LinkDescription from "./components/link-description/LinkDescription";
import './styles/nav-item.css';
import type { PageRoute } from "@/shared/components/side-bar/types/page-data";

const NavItem = ({page, isActive} : NavItemProps) => {

    const {isActive: isVisible, onActive: onVisible} = useActive();

    return (
        <div className = "nav-item_container">
            <LinkDescription isActive = {isActive} page = {page} onVisible = {onVisible} />
            {isVisible && isComposite(page) && <CompositeLink isVisible = {isVisible} isActive = {isActive} page = {page} />}
        </div>
    )
}

const isComposite = (page: PageRoute) => "links" in page;

export default NavItem;