import "./footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div id="footer">
            <div id="logoarea">
                <p>tes</p>
            </div>
            <div>
            <h2>tes</h2>
            <ul id="about">
            <li className="listabout">
                <Link to="/">Company</Link>
            </li>
            <li className="listabout">
                <Link to="/">Team</Link>
            </li>
            <li className="listabout">
                <Link to="/">Help & Support</Link>
            </li>
            <li className="listabout">
                <Link to="/">License</Link>
            </li>
        </ul>
        </div>
        </div>
    )
}