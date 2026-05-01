// ini hasil debug

import "./cardsearch.css";

export const Cardsearch = ({ plant }) => {
  return (
    <div id="cardsearchcontainer">
      <img id="imageresult" src={plant?.image_url || ""} alt={plant?.common_name} />
      <h2 id="commonresult">{plant?.common_name || "-"}</h2>
      <p id="scientificresult">Scientific Name: {plant?.scientific_name || "-"}</p>
      <p id="familyresult">Family: {plant?.family || "-"}</p>
      <p id="genusresult">Genus: {plant?.genus || "-"}</p>
      <p id="yearresult">Year: {plant?.year || "-"}</p>
    </div>
  );
};

// ini bikinan sendiri (default)

// import "./cardsearch.css";

// export const Cardsearch = () => {
//     return (
//         <div id="cardsearchcontainer">
//             <img id="imageresult" src="" />
//             <h2 id="commonresult">tes</h2>
//             <p id="scientificresult">Scientific Name:</p>
//             <p id="familyresult">Family:</p>
//             <p id="genusresult">Genus:</p>
//             <p id="yearresult">Year:</p>
//         </div>
//     )
// }

