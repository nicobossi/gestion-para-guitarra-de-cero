import NavItem from "./components/nav-item/NavItem";
import type { NavegatorPageProps } from "./navegator-pages";
import './styles/navegator-pages.css';

const NavegatorPage = ({pages, isActive} : NavegatorPageProps) => {

    return (
        <section className = {isActive ? "active_navegator-container" : "navegator-container"}>
            {pages.map(page => 
                <NavItem 
                    page={page} 
                    key={page.pageName}
                    isActive = {isActive}
                />
            )}
        </section>
    )
}

export default NavegatorPage;