import React from "react";
import { connect } from "react-redux";
import { setVolumeInterval, changeVolumeAction } from "../actions";

const Volume = ({
  name,
  power,
  volume,
  setVolumeInterval,
  changeVolumeAction,
  intervalIdVolume
}) => {
  const sign = name === "volumeUp" ? "+" : "-";

  const handleVolumeMouseDown = e => {
    if (power) {
      const buttonType = e.target.id;
    //   console.log(`${buttonType} volume ${volume}`);
      let intervalId;
      if (buttonType === "volumeUp" && volume < 100) {
        intervalId = setInterval(() => {
          if (volume < 100) {
            changeVolumeAction(1);
          }
        }, 150);
      } else if (buttonType === "volumeDown" && volume <= 100) {
        intervalId = setInterval(() => {
          if (volume > 0) {
            changeVolumeAction(-1);
          }
        }, 150);
      }
      setVolumeInterval(intervalId);
    }
  };

  const clearVolumeInterval = () => {
    if (power) {
      if (intervalIdVolume) {
        clearInterval(intervalIdVolume);
        setVolumeInterval(null);
      }
    }
  };

  return (
    <div>
      <button
        id={name}
        onMouseDown={e => handleVolumeMouseDown(e)}
        onMouseUp={() => clearVolumeInterval()}
      >
        {`Vol${sign}`}
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    power: state.power,
    volume: state.volume,
    intervalIdVolume: state.intervalIdVolume
  };
};
export default connect(
  mapStateToProps,
  { setVolumeInterval, changeVolumeAction }
)(Volume);

//   <button id={name} onMouseDown={(e) => handleVolumeMouseDown(e)} onMouseUp={(e) => console.log(e.target)}>
//             {`Vol${sign}`}
//             </button>
