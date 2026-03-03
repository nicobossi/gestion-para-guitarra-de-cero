import { Link } from "react-router";
import type { NavItemProps } from "./nav-item";
import { useState } from "react";


const NaveItem = ({page} : NavItemProps) => {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const changeVisible = () => setIsVisible(value => value!);
    
    return (
        <div className="nav-item">
            <section className="nav-item_desciption" onClick={changeVisible}>
                <p>{page.pageName}</p>
                <figure>
                    <img src="" alt="" />
                </figure>
            </section>
            {isVisible && <section className="nav-item_links">
                {page.links.map(link => 
                    <Link to={link.linkName} />
                )}
            </section>
            }
        </div>
    )
}

export default NaveItem;