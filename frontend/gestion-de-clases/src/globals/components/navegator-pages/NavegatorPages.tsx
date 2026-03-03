import NavItem from "../nav-item/NavItem";
import type { NavegatorPageProps } from "./navegator-pages";


const NavegatorPage = ({pages} : NavegatorPageProps) => {

    return (
        <section className="navegator-container">
            {pages.map(page => 
                <NavItem page={page} />
            )}
        </section>
    )
}

export default NavegatorPage;