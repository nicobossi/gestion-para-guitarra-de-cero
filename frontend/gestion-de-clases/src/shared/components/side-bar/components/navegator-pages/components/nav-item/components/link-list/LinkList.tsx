import { Link } from "react-router"
import type { LinksListProps } from "./link-list";

const ABSOLUTE_PATH = '/';

const LinksList = ({page} : LinksListProps) => {

    return (
        <section className="nav-item_links">
            {page.links.map(link => 
                <Link 
                    to={ABSOLUTE_PATH + link.path} 
                    key={page.pageName}>
                {link.linkName}
                </Link>
            )}
        </section>
    )
}

export default LinksList;
