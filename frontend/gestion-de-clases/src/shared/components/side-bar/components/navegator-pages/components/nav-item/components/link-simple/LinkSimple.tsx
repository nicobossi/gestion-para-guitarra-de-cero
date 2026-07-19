import { Link } from "react-router";
import type { LinkSimpleProps } from "./link-simple";
import { styles } from "./styles";

const ABSOLUTE_PATH = '/';

const LinkSimple = ({isVisible, simpleRoute}: LinkSimpleProps) => {
    return (
        <div className = {styles(isVisible)}>
            <Link 
                to = {ABSOLUTE_PATH + simpleRoute.path} 
                key = {simpleRoute.id}>
                {simpleRoute.pageName}
            </Link>
        </div>
    )
}

export default LinkSimple;