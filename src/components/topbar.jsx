import './topbar.css'
import { Link } from "react-router-dom";

export const Topbar = () => {
return(
    <div>
        <ul id="containertopbar">
            <li className="listtopbar">
                <Link to="/">Home</Link>
            </li>
            <li className="listtopbar">
                <Link to="/search">Search</Link>
            </li>
            <li className="listtopbar">
                <Link to="/searchbyimage">Search by Image</Link>
            </li>
            <li className="listtopbar">
                <Link to="about">About</Link>
            </li>
        </ul>
    </div>
)
}