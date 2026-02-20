import './widebox1.css'
import { Link } from 'react-router-dom';

export const Widebox1 = ({ background }) => {
    return (
        <div className={`containerwidebox1 ${background}`}>
            <div id="block1widebox1">
                <p>tes</p>
            </div>
            <h1 id="h1widebox">Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing</h1>
            <Link to="/login" id="block2widebox1">
                <p id="buttonlogin">Login</p>
            </Link>
        </div>
    )
}