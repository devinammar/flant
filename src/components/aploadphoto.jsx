import "./aploadphoto.css"

export const Aploadphoto = () => {
  return (
    <div>
      <form id="aploadcontainer" method="post" encType="multipart/form-data">
      <div>
        {/* class box__input belum bener, ini masih copy-paste dari internet */}
        <div class="box__input"> 
           <input class="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
           <label for="file"><strong>Choose a file</strong><span class="box__dragndrop"> or drag it here</span>.</label>
           <button class="box__button" type="submit">Upload</button>
         </div>
        {/* __________________________________________________________ */}
      </div>
      <p>tes</p>
      </form>
    </div>
  );
};