// ini hasil debug (terbaru)

import { useState } from "react";
import "./aploadphoto.css";

export const Aploadphoto = ({ onResult }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("https://flant-production.up.railway.app/api/searchbyimage", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    onResult(data);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) handleFile(dropped);
  };

  return (
    <div>
      <div id="aploadcontainer">
        <div
          id="boxapload"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{ border: isDragging ? "2px dashed white" : "none" }}
        >
          <input
            id="file"
            className="boxinput"
            type="file"
            accept="image/*"
            onChange={(e) => handleFile(e.target.files[0])}
          />
          <label id="labelapload" htmlFor="file">
            <strong>Choose a file</strong> or drag it here
          </label>

          {preview && (
            <div id="previewcontainer">
              <img id="previewimage" src={preview} alt="preview" />
              <p id="previewname">{file.name}</p>
            </div>
          )}

          <button className="aploadbutton" onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

// ___________________________________________________

// ini hasil debug (lama)

// import { useState } from "react";
// import "./aploadphoto.css";

// export const Aploadphoto = ({ onResult }) => {
//   const [file, setFile] = useState(null);

//   const handleUpload = async () => {
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("image", file);

//     // ambil data dari file backend (file backend udah di deploy di Railway)
//     const res = await fetch("https://flant-production.up.railway.app/api/searchbyimage", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await res.json();
//     onResult(data);
//   };

//   return (
//     <div>
//       <div id="aploadcontainer">
//         <div id="boxapload">
//           <input
//             id="file"
//             className="boxinput"
//             type="file"
//             accept="image/*"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//           <label id="labelapload" htmlFor="file">
//             <strong>Choose a file</strong> or drag it here
//           </label>
//           <button className="aploadbutton" onClick={handleUpload}>
//             Upload
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// ________________________________________________

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