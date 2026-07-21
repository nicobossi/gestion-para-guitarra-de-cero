import type { NavItemProps } from "./nav-item";
import CompositeLink from "./components/composite-link/CompositeLink";
import LinkDescription from "./components/link-description/LinkDescription";
import type { PageRoute } from "@/shared/components/side-bar/types/page-data";
import { styles } from "./styles";

const NavItem = ({page, isActive, isVisible, onVisible} : NavItemProps) => {

    const is = isVisible(page.id)

    return (
        <div className = {styles(is)}>
            <LinkDescription isActive = {isActive} page = {page} onVisible = {onVisible} />
            {is && isComposite(page) && <CompositeLink isVisible = {is} isActive = {isActive} page = {page} />}
        </div>
    )
}

const isComposite = (page: PageRoute) => "links" in page;

export default NavItem;