import './widebox1.css'
import { Link } from 'react-router-dom';

export const Widebox1 = () => {
    return (
        <div className="containerwidebox1">
            <div id="block1widebox1">
                <p>tes</p>
            </div>
            <Link to="/login" id="block2widebox1">
                <p id="buttonlogin">Login</p>
            </Link>
        </div>
    )
}