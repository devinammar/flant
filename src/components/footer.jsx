import "./footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div id="footer">
      <div id="logoarea">
        {/* <p>tes</p> */}
        <img id="flantlogofooter" src="/flantlogo.png" />
      </div>
      <div className="listarea1">
        <h2 className="h2">About</h2>
        <ul id="about">
          <li className="listabout">
            <Link to="/">About Flant</Link>
          </li>
          <li className="listabout">
            <Link to="/">How it Works</Link>
          </li>
          <li className="listabout">
            <Link to="/">Tech Stack</Link>
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
            <Link to="/">API Reference</Link>
          </li>
          <li className="listabout">
            <Link to="/">Photo Assets</Link>
          </li>
          <li className="listabout">
            <Link to="/">Species Index</Link>
          </li>
          <li className="listabout">
            <Link to="/">Habitat Info</Link>
          </li>
        </ul>
      </div>
      <div className="listarea3">
        <h2 className="h2">Contact</h2>
        <ul id="about">
          <li className="listabout">
            <Link to="/">GitHub</Link>
          </li>
          <li className="listabout">
            <Link to="/">Email</Link>
          </li>
          <li className="listabout">
            <Link to="/">LinkedIn</Link>
          </li>
          <li className="listabout">
            <Link to="/">Instagram</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
