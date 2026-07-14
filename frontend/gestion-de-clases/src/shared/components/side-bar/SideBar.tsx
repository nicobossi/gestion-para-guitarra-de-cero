import { useState } from 'react';
import './side-bar.css'
import pagesData from './pages-data';
import NavegatorPage from '../navegator-pages/NavegatorPages';


const SideBar = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false); 

    const onVisible = () => setIsVisible(prevIsVisible => !prevIsVisible);

    return (
        <aside className={isVisible ? 'active_side-dar' : 'side-bar'}>
            <button onClick={onVisible}>click</button>
            {isVisible && <NavegatorPage pages={pagesData} />}
        </aside>
    )   
}

export default SideBar;