import NavItem from "../nav-item/NavItem";
import type { NavegatorPageProps } from "./navegator-pages";
import './navegator-pages.css';

const NavegatorPage = ({pages} : NavegatorPageProps) => {

    return (
        <section className="navegator-container">
            {pages.map(page => 
                <NavItem 
                    page={page} 
                    key={page.pageName}
                />
            )}
        </section>
    )
}

export default NavegatorPage;