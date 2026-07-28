import type { CompositeLinkProps } from "./composite-route"
import LinkSimple from "../link-simple/LinkSimple";
import { slots } from "./styles";
import { css } from "@styled-system/css";

const CompositeLink = ({page, isVisible, isActive}: CompositeLinkProps) => {   
    
    const styles = slots.raw({ show: isVisible && isActive });

    return (
        <section className = {css(styles.container)}>
            <div className = {css(styles.submenu)}>
                {page.links.map(link => 
                <LinkSimple 
                    simpleRoute = {link} 
                    key = {link.id} 
                    isVisible = {isVisible}
                />
            )}
            </div>
        </section>
    )
}

export default CompositeLink;
