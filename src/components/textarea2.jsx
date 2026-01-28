import "./textarea2.css";
import { Link } from "react-router-dom";

export const Textarea2 = ({h2area2, parea2}) => {
  return (
    <div id="textarea2container">
      <h2 id="h2area2">{h2area2}</h2>
      <p id="parea2">{parea2}</p>
      <Link to="about">Learn About</Link>
    </div>
  );
};
