// ini hasil debug

import { useState } from "react";
import "./aploadphoto.css";

export const Aploadphoto = ({ onResult }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("http://localhost:5000/api/searchbyimage", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    onResult(data);
  };

  return (
    <div>
      <div id="aploadcontainer">
        <div id="boxapload">
          <input
            id="file"
            className="boxinput"
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label id="labelapload" htmlFor="file">
            <strong>Choose a file</strong> or drag it here
          </label>
          <button className="aploadbutton" onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

// ______________________________________________

// ini bikinan sendiri

// import "./aploadphoto.css";

// export const Aploadphoto = () => {
//   return (
//     <div>
//       <form
//         id="aploadcontainer"
//         method="post"
//         encType="multipart/form-data"
//       >
//         <div id="boxapload">
//           <input
//             id="file"
//             className="boxinput"
//             type="file"
//             name="files[]"
//             data-multiple-caption="{count} files selected"
//             multiple
//           />

//           <label id="labelapload" htmlFor="file">
//             <strong>Choose a file</strong> or drag it here
//           </label>

//           <button className="aploadbutton" type="submit">
//             Upload
//           </button>
//         </div>

//         <div className="box__uploading">Uploading…</div>
//         <div className="box__success">Done!</div>
//         <div className="box__error">Error!</div>
//       </form>
//     </div>
//   );
// };