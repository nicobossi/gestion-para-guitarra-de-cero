import type { NavDescriptionProps } from './nav-description';
import { styles } from './styles';

const NavDescription = ({pageName, onVisible, isActive} : NavDescriptionProps) => {
    return (
        <div className = {styles(isActive)} onClick = {onVisible}>
            <p>{pageName}</p>
        </div>
    )
}

export default NavDescription;