import { useState } from 'react';
import './side-bar.css'
import pagesData from './pages-data';
import NavegatorPage from './components/navegator-pages/NavegatorPages';
import MenuIcon from './components/menu-icon/MenuIcon';

const SideBar = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false); 

    const onVisible = () => setIsVisible(prevIsVisible => !prevIsVisible);

    return (
        <aside className = {isVisible ? 'menu_active-side-bar' : 'menu_side-bar'}>
            <MenuIcon onShow = {onVisible} isVisible = {isVisible} />
            {isVisible && <NavegatorPage pages = {pagesData} />}
        </aside>
    )   
}

export default SideBar;