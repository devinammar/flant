import "./aploadphoto.css";

export const Aploadphoto = () => {
  return (
    <div>
      <form
        id="aploadcontainer"
        method="post"
        encType="multipart/form-data"
      >
        <div id="boxapload">
          <input
            id="file"
            className="boxinput"
            type="file"
            name="files[]"
            data-multiple-caption="{count} files selected"
            multiple
          />

          <label id="labelapload" htmlFor="file">
            <strong>Choose a file</strong> or drag it here
          </label>

          <button className="aploadbutton" type="submit">
            Upload
          </button>
        </div>

        <div className="box__uploading">Uploading…</div>
        <div className="box__success">Done!</div>
        <div className="box__error">Error!</div>
      </form>
    </div>
  );
};