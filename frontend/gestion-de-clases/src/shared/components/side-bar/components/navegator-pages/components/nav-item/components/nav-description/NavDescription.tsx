const NavDescription = ({pageName, changeVisible} : NavDescriptionProps) => {

    return (
        <section className="nav-item_desciption" onClick={changeVisible}>
            <p>{pageName}</p>
            <figure>
                    
            </figure>
        </section>
    )
}

export default NavDescription;