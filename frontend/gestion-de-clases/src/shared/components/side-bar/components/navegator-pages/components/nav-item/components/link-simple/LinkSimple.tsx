import { Link } from "react-router";
import type { LinkSimpleProps } from "./link-simple";

const ABSOLUTE_PATH = '/';

const LinkSimple = ({isVisible, simpleRoute, styles}: LinkSimpleProps) => {
    return (
        <Link 
            className = {styles({show: isVisible ? 'on' : 'off'})}
            to = {ABSOLUTE_PATH + simpleRoute.path} 
            key = {simpleRoute.id}>
                {simpleRoute.pageName}
        </Link>
    )
}

export default LinkSimple;