import type { NavDescriptionProps } from './nav-description';

const NavDescription = ({pageName, onVisible, isActive, styles} : NavDescriptionProps) => {
    return (
        <div className = "nav-item_desciption" onClick = {onVisible}>
            <p className = {styles({show: isActive ? 'on' : 'off'})}>{pageName}</p>
        </div>
    )
}

export default NavDescription;