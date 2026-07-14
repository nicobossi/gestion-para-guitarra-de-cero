import { Link } from "react-router";
import type { NavItemProps } from "./nav-item";
import { useState } from "react";
import './nav-item.css';
import type { PageData } from "../side-bar/types/page-data";

const NaveItem = ({page} : NavItemProps) => {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const changeVisible = () => setIsVisible(prevIsVisible => !prevIsVisible);
    
    return (
        <div className="nav-item">
            <NavDescription 
                pageName={page.pageName} 
                changeVisible={changeVisible} />
            {isVisible && <LinksList page={page} />}
        </div>
    )
}

type NavDescriptionProps = {
    pageName : string,
    changeVisible : () => void
}

const NavDescription = ({pageName, changeVisible} : NavDescriptionProps) => {

    return (
        <section className="nav-item_desciption" onClick={changeVisible}>
            <p>{pageName}</p>
            <figure>
                    
            </figure>
        </section>
    )
}

type LinksListProps = {
    page : PageData
}

const LinksList = ({page} : LinksListProps) => {

    return (
        <section className="nav-item_links">
            {page.links.map(link => 
                <Link 
                    to={`/${link.link}`} 
                    key={page.pageName}>
                {link.linkName}
                </Link>
            )}
        </section>
    )
}

export default NaveItem;