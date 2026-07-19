import pagesData from './pages-data';
import NavegatorPage from './components/navegator-pages/NavegatorPages';
import MenuIcon from './components/menu-icon/MenuIcon';
import type { SideBarProps } from './types/side-bar';
import { styles } from './styles';

const SideBar = ({onActive, isActive}: SideBarProps) => {
    return (
        <aside className = {styles(isActive)}>
            <MenuIcon 
                onShow = {onActive} 
                isVisible = {isActive} 
            />
            <NavegatorPage 
                isActive = {isActive} 
                pages = {pagesData} 
            />
        </aside>
    )   
}

export default SideBar;