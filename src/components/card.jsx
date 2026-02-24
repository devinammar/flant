import "./card.css";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <div id="containercard">
        <h1 id="h1card">With 2 Main Features</h1>
    <Link id="card1" to="/search">
        <h2 className="h2card">Search</h2>
        <p className="pcard">Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem lorem</p>
    </Link>
    <Link id="card2" to="/searchbyimage">
        <h2 className="h2card">Search by Image</h2>
        <p className="pcard">Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem lorem</p>
    </Link>
    </div>
  );
};
