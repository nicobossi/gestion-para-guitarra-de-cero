import type { MenuIconProps } from "./menu-icon";
import './styles/menu-icon.css';

const MenuIcon = ({onShow, isVisible}: MenuIconProps) => {
    return (
        <svg 
            className = {isVisible ? 'active_menu-icon' : 'menu-icon'}
            onClick = {onShow}
            xmlns = "http://www.w3.org/2000/svg" 
            viewBox = "0 -10 30 50"
            fill = "none"
        >
            <path d = "M0 20.5h30M0 10.5h30M0 .5h30" />
    </svg>
    )
}

export default MenuIcon;

