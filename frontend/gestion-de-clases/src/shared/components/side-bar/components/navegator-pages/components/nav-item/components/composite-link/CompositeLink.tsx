import useActive from "@/shared/hooks/useActive";
import LinkSimple from "../link-simple/LinkSimple";
import NavDescription from "../nav-description/NavDescription";
import type { CompositeLinkProps } from "./composite-route"
import './styles/composite-link.css';

const CompositeLink = ({page, pageName, isActive, styles}: CompositeLinkProps) => {

    const {isActive: isVisible, onActive: onVisible} = useActive();
    
    return (
        <div className = "nav-item">
            <NavDescription 
                styles = {styles}
                pageName = {pageName} 
                onVisible = {onVisible} 
                isActive = {isActive}
            />
            {isVisible && 
                <section className = "nav-item_links">
                    {page.links.map(link => 
                        <LinkSimple 
                            simpleRoute = {link} 
                            key = {link.id} 
                            styles = {styles} 
                            isVisible
                        />
                    )}
                </section>}
        </div>
    )
}

export default CompositeLink;