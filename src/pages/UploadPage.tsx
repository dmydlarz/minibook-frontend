import React, { useState } from "react";

const UploadPage = () => {
  const [files, setFiles] = useState<string[]>();
  return (
    <div className={"uploadPage"}>
      <div className={"uploadPage__container"}>
        <div className={"uploadPage__inside-container"}>
          <span>Drag and Drop</span>
          <span>Photo(s)</span>
          <div className="parent-div">
            <button className="btn-upload">Select File(s)</button>
            <input
              type="file"
              name="upfile"
              multiple
              accept="image/png, image/jpg"
              value={files}
            />
          </div>
          <div>4 files uploaded</div>
          <div className={"uploadPage__loading-bar"}>100%</div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
