import { Link } from "react-router";
import type { LinkNavegationProps } from "./link-navegation";
import './link-navegation.css';

const LinkNavegation = ({message, path}: LinkNavegationProps) => {
    return (
        <div className = "link-container">
            <Link to={"/" + path}>{message}</Link>
        </div>
    )
}

export default LinkNavegation;