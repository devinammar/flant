import "./textarea2.css";
import { Link } from "react-router-dom";

export const Textarea2 = ({h1area2, parea2}) => {
  return (
    <div id="textarea2container">
      <h1 id="h1area2">{h1area2}</h1>
      <p id="parea2">{parea2}</p>
      <button id="buttonarea2">
      <Link id="textbuttonarea2" to="about">Learn About</Link>
      </button>
    </div>
  );
};
