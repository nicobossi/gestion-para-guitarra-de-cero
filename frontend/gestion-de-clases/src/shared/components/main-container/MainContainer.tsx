import SideBar from "../side-bar/SideBar";
import type { MainContainerProps } from "./main-container";
import useActive from "@/shared/hooks/useActive";
import { styles } from "./styles";

const MainContainer = ({children, css}: MainContainerProps) => {
    const {isActive, onActive} = useActive();

    return (
        <section className = {styles(isActive, css)}>
            <SideBar isActive = {isActive} onActive = {onActive} />
            {children}
        </section>
    )
}

export default MainContainer;