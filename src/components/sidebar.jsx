// ini hasil debug

import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button id="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {isOpen && (
        <div id="overlay" onClick={() => setIsOpen(false)} />
      )}

      <div id="sidebar" className={isOpen ? "open" : ""}>
        <ul id="containersidebar">
          <li className="listsidebar">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="listsidebar">
            <Link to="/search" onClick={() => setIsOpen(false)}>Search</Link>
          </li>
          <li className="listsidebar">
            <Link to="/searchbyimage" onClick={() => setIsOpen(false)}>Search by Image</Link>
          </li>
          <li className="listsidebar">
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

// ini bikinan sendiri (default)

// import "./sidebar.css";

// export const Sidebar = () => {
//     return(
//         <div id="sidebar">
//             <ul id="containersidebar">
//             <li className="listsidebar">
//                 <Link to="/">Home</Link>
//             </li>
//             <li className="listsidebar">
//                 <Link to="/search">Search</Link>
//             </li>
//             <li className="listsidebar">
//                 <Link to="/searchbyimage">Search by Image</Link>
//             </li>
//             <li className="listsidebar">
//                 <Link to="/about">About</Link>
//             </li>
//         </ul>
//         </div>
//     )
// }