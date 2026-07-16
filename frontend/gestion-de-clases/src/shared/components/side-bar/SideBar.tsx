import pagesData from './pages-data';
import NavegatorPage from './components/navegator-pages/NavegatorPages';
import MenuIcon from './components/menu-icon/MenuIcon';
import './styles/side-bar.css';
import type { SideBarProps } from './types/side-bar';

const SideBar = ({onActive, isActive}: SideBarProps) => {

    return (
        <aside className = {isActive ? 'menu_active-side-bar' : 'menu_side-bar'}>
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