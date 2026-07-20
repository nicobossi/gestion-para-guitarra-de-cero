import useNavItemActive from "../../hooks/useNavItemActive";
import NavItem from "./components/nav-item/NavItem";
import type { NavegatorPageProps } from "./navegator-pages";
import { styles } from "./styles";

const NavegatorPage = ({pages, isActive} : NavegatorPageProps) => {

    const {isVisible, onVisible} = useNavItemActive();

    return (
        <section className = {styles(isActive)}>
            {pages.map(page => 
                <NavItem 
                    page = {page} 
                    key = {page.id}
                    isActive = {isActive}
                    isVisible = {isVisible}
                    onVisible = {onVisible}
                />
            )}
        </section>
    )
}

export default NavegatorPage;