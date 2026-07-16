import { Link } from "react-router";
import type { LinkSimpleProps } from "./link-simple";
import { css } from "@styled-system/css";

const ABSOLUTE_PATH = '/';

const LinkSimple = ({simpleRoute}: LinkSimpleProps) => {
    return (
        <Link 
            className = {styles}
            to = {ABSOLUTE_PATH + simpleRoute.path} 
            key = {simpleRoute.id}>
                {simpleRoute.pageName}
        </Link>
    )
}

const styles = css({
    color: '#FFF'
});

export default LinkSimple;