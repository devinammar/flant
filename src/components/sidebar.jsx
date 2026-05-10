import "./sidebar.css";

export const Sidebar = () => {
    return(
        <div id="sidebar">
            <ul id="containersidebar">
            <li className="listsidebar">
                <Link to="/">Home</Link>
            </li>
            <li className="listsidebar">
                <Link to="/search">Search</Link>
            </li>
            <li className="listsidebar">
                <Link to="/searchbyimage">Search by Image</Link>
            </li>
            <li className="listsidebar">
                <Link to="/about">About</Link>
            </li>
        </ul>
        </div>
    )
}