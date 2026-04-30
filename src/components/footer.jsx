import "./footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div id="footer">
      <div id="logoarea">
        {/* <p>tes</p> */}
        <img id="flantlogofooter" src="public/flantlogo.png" />
      </div>
      <div className="listarea1">
        <h2 className="h2">About</h2>
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
      <div className="listarea2">
        <h2 className="h2">Resource</h2>
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
      <div className="listarea3">
        <h2 className="h2">Contact</h2>
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
  );
};
