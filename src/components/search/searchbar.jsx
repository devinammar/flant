import "./searchbar.css"

export const Searchbar = () => {
    return (
        <div id="searchbarcontainer">
            <input type="text" placeholder="Search..." id="searchbar"/>
            <button id="buttonsearch">
                <img src="/public/searchicon3.png" />
            </button>
        </div>
    )
}

// import React, { useState } from "react";
// import "./searchbar.css";

// export const Searchbar = () => {
//   const [query, setQuery] = useState("");
//   const [result, setResult] = useState("");

//   const handleSearch = async () => {
//     // Cek apakah query sudah diisi
//     if (!query) {
//       alert("Please enter a search query.");
//       return;
//     }

//     try {
//       // Mengirim request ke backend
//       const response = await fetch(`http://localhost:5000/api/search?query=${query}`);
//       const data = await response.json();

//       // Menampilkan hasil pencarian di frontend
//       setResult(data.message);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setResult("Error fetching data");
//     }
//   };

//   return (
//     <div id="searchbarcontainer">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search..."
//         id="searchbar"
//       />
//       <button id="buttonsearch" onClick={handleSearch}>
//         <img src="/public/searchicon3.png" alt="search icon" />
//       </button>

//       {result && <div className="result">{result}</div>}
//     </div>
//   );
// };

