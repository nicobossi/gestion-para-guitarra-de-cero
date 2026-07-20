import type { CompositeLinkProps } from "./composite-route"
import LinkSimple from "../link-simple/LinkSimple";
import './styles.css';

const CompositeLink = ({page, isVisible}: CompositeLinkProps) => {    
    return (
        <section className = "nav-item_links">
            {page.links.map(link => 
            <LinkSimple 
                simpleRoute = {link} 
                key = {link.id} 
                isVisible = {isVisible}
            />
        )}
        </section>
    )
}

export default CompositeLink;
