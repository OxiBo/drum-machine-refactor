import React from "react";
import { connect } from "react-redux"

const DisplayVolume = ({power, volume}) => {
  // set class isActive to use css transition to fade in the volume level
  const isActive = power ? "isActive" : "";

  return (
    <div className="controlSection" id="volumeDisplay">
      <p className={isActive}>
        {power ? `VOL : ${volume} %` : ""}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    volume: state.volume,
    power: state.power
  }
}
export default connect(mapStateToProps)(DisplayVolume);
