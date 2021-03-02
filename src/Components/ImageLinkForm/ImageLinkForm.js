import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="f3">
      <p>
        {"This Magic Brain will detect faces in your pictures. Give it a try!"}{" "}
      </p>
      <div className="center">
        <div className="form center pa3 br3 shadow-3">
          <input
            className="f4 pa2 w-80 center balck bw1 ba b--white bg-white"
            type="text"
            placeholder="enter image URL"
            onChange={onInputChange}
          />
          <button
            className=" grow w-30 f4 link ph3 pv2 dib white bw1 b--solid b--white bg-black"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
