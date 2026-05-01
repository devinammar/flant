// ini hasil debugg

import { useState } from "react";
import "./searchbar.css";

export const Searchbar = ({ onResult }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return;
    const res = await fetch(`http://localhost:5000/api/search?query=${query}`);
    const data = await res.json();
    onResult(data);
  };

  return (
    <div id="searchbarcontainer">
      <input
        type="text"
        placeholder="Search..."
        id="searchbar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button id="buttonsearch" onClick={handleSearch}>
        <img src="/searchicon3.png" />
      </button>
    </div>
  );
};

// ini bikinan sendiri (default)

// import "./searchbar.css"

// export const Searchbar = () => {
//     return (
//         <div id="searchbarcontainer">
//             <input type="text" placeholder="Search..." id="searchbar"/>
//             <button id="buttonsearch">
//                 <img src="/public/searchicon3.png" />
//             </button>
//         </div>
//     )
// }
