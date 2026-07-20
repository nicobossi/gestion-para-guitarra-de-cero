import type { CompositeLinkProps } from "./composite-route"
import LinkSimple from "../link-simple/LinkSimple";
import { styles } from "./styles";

const CompositeLink = ({page, isVisible}: CompositeLinkProps) => {    
    return (
        <section className = {styles(isVisible)}>
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
