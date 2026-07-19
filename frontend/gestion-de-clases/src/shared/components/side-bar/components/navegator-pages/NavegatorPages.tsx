import NavItem from "./components/nav-item/NavItem";
import type { NavegatorPageProps } from "./navegator-pages";
import { styles } from "./styles";

const NavegatorPage = ({pages, isActive} : NavegatorPageProps) => {

    return (
        <section className = {styles(isActive)}>
            {pages.map(page => 
                <NavItem 
                    page = {page} 
                    key = {page.id}
                    isActive = {isActive}
                />
            )}
        </section>
    )
}

export default NavegatorPage;