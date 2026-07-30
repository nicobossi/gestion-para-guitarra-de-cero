import { Link } from "react-router";
import type { LinkNavegationProps } from "./link-navegation";
import './link-navegation.css';
import { css } from "@styled-system/css";

const LinkNavegation = ({message, styles, path}: LinkNavegationProps) => {
    return (
        <div className = {css(styles)}>
            <Link className = {css({ color: '#FFF'})} to = {"/" + path}>{message}</Link>
        </div>
    )
}

export default LinkNavegation;