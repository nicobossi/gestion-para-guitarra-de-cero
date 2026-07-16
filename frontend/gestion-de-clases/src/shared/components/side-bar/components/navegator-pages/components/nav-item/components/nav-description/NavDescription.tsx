import './styles/nav-description.css';

const NavDescription = ({pageName, onVisible, isActive} : NavDescriptionProps) => {
    return (
        <div className = "nav-item_desciption" onClick = {onVisible}>
            <p className = {isActive ? "active_side-bar-name-page" : "side-bar-name-page"}>{pageName}</p>
        </div>
    )
}

export default NavDescription;