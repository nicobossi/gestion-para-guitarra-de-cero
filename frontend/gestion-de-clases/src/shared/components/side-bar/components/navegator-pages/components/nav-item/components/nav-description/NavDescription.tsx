import './styles/nav-description.css';

const NavDescription = ({pageName, changeVisible, isActive} : NavDescriptionProps) => {
    return (
        <section className = "nav-item_desciption" onClick = {changeVisible}>
            <p className = {isActive ? "active_side-bar-name-page" : "side-bar-name-page"}>{pageName}</p>
            <figure>
                    
            </figure>
        </section>
    )
}

export default NavDescription;