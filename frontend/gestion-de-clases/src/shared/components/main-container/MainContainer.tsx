import SideBar from "../side-bar/SideBar";
import { styles } from "./styles";
import type { MainContainerProps } from "./main-container";
import useActive from "@/shared/hooks/useActive";

const MainContainer = ({children}: MainContainerProps) => {
    const {isActive, onActive} = useActive();

    return (
        <section className = {styles({size: isActive})}>
            <SideBar isActive = {isActive} onActive = {onActive} />
            {children}
        </section>
    )
}

export default MainContainer;