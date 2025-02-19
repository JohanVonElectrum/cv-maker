import "./Link.css";
import {Link as RouterLink} from "react-router-dom";

interface LinkProps {
    to: string;
    children: string;
    type?: "text" | "button";
}

function Link({to, children, type = "text"}: LinkProps) {
    return (
        <RouterLink to={to} className={"link"} x-type={type}>
            {children}
        </RouterLink>
    );
}

export default Link;
