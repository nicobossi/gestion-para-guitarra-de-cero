import Icon from "@/shared/components/icon/Icon"
import NavDescription from "../nav-description/NavDescription"
import { styles } from "./styles"
import type { PageRoute } from "@/shared/components/side-bar/types/page-data"
import LinkSimple from "../link-simple/LinkSimple"

type LinkContainerProps = {
    page: PageRoute
    onVisible: (id: number) => void 
    isActive: boolean
}

const LinkDescription = ({page, onVisible, isActive}: LinkContainerProps) => {
    return (
        <section className = {styles(isActive)} onClick = {() => onVisible(page.id)}>
            {page.icon && <Icon icon = {page.icon} />}
            <Description page = {page} isActive = {isActive} onVisible = {onVisible} />
        </section>
    )
}

const Description = ({page, isActive}: LinkContainerProps) => {
    return (
        "path" in page ? 
            <LinkSimple 
                isVisible = {isActive} 
                simpleRoute = {page} 
            /> : 
            <NavDescription 
                pageName = {page} 
                isActive = {isActive} 
            />
    )
}

export default LinkDescription;