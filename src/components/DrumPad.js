import React from "react";

const DrumPad = ({ name, id, src }) => {

  return (
    <div className="drum-pad" id={name}>
      <audio className="clip" id={id} src={`${src}`} data-key={name}></audio>
      <p> {id}</p>
    </div>
  );
};


export default DrumPad
