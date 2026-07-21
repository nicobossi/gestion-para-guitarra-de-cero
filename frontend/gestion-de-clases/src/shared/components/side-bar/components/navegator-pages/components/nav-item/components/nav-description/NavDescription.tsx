import type { NavDescriptionProps } from './nav-description';
import { styles } from './styles';

const NavDescription = ({pageName, isActive} : NavDescriptionProps) => {
    return (
        <div className = {styles(isActive)}>
            <p>{pageName.pageName}</p>
        </div>
    )
}

export default NavDescription;