// ini hasil debug

import { useState } from 'react'
import './widebox1.css'
import { Link } from 'react-router-dom';
import { Searchbar } from "./search/searchbar";
import { Cardsearch } from '../components/cardsearch';
import { Aploadphoto } from '../components/aploadphoto';

export const Widebox1 = ({ background, search, cardsearch, appearance }) => {
    const [result, setResult] = useState(null);

    return (
        <div className={`containerwidebox1 ${background}`}>
            <div id="block1widebox1">
                <img id="flantlogo" src="/flantlogo.png" />
            </div>
            <h1 id="h1widebox">Explore every Leaf, Find every Inch of Root that can be Found</h1>
            <Link to="/login" id="block2widebox1">
                <p id="buttonlogin">Login</p>
            </Link>
            <div className={`searchlabel ${search}`}>
                <Searchbar onResult={setResult} />
            </div>
            <div className={`aploadfeature ${configuration}`}>
            <div className={`aploadphotoo ${appearance}`}>
                <Aploadphoto onResult={setResult} />
            </div>
            <div className={`cardresult ${cardsearch}`}>
                <Cardsearch plant={result} />
            </div>
            </div>
        </div>
    )
}

// ini bikinan sendiri (default)

// import './widebox1.css'
// import { Link } from 'react-router-dom';
// import { Searchbar } from "./search/searchbar";
// import { Cardsearch } from '../components/cardsearch'

// export const Widebox1 = ({ background, search, cardsearch }) => {
//     return (
//         <div className={`containerwidebox1 ${background}`}>
//             <div id="block1widebox1">
//                 {/* <p>tes</p> */}
//                 <img id="flantlogo" src="public/flantlogo.png" />
//             </div>
//             <h1 id="h1widebox">Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing</h1>
//             <Link to="/login" id="block2widebox1">
//                 <p id="buttonlogin">Login</p>
//             </Link>
//             <div className={`searchlabel ${search}`}>
//             <Searchbar />
//             </div>
//             <div className={`cardresult ${cardsearch}`}>
//             <Cardsearch />
//             </div>
//         </div>
//     )
// }